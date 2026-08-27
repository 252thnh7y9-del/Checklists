# Skill Quest — working notes

## How work gets delivered

**Publish to GitHub Pages. Do not create Artifacts.**

Pages is already enabled and deploys from the default branch, so publishing is
just a push:

```sh
git push -u origin <branch>
```

GitHub then runs `pages build and deployment` automatically. A change is not
delivered until that run reports success — check it, then give the user the URL:

**https://252thnh7y9-del.github.io/Checklists/**

The sandbox proxy blocks `github.io`, so the live page cannot be fetched from a
session. Confirm a deploy by checking that the newest `pages build and
deployment` run succeeded and its `head_sha` matches the commit just pushed
(`mcp__github__actions_list`, method `list_workflow_runs`).

If the default branch ever changes, repoint Settings → Pages at the new one.

## The project

A dependency-free static site: 502 skills in 25 categories, each with its own
page. No build step for the site itself — `index.html` loads the CSS and the
scripts directly, in order.

```
index.html            shell, nav, footer
css/styles.css        all styling; light/dark defined at token level
css/fonts.css         generated — Google Fonts inlined as data URIs
data/categories.json  the 25 categories, in home-page order
data/<cat>/index.json that category's skill ids, in display order
data/<cat>/<id>.json  one skill — the source you edit
js/skills.js          GENERATED from data/ — never edit by hand
js/store.js           localStorage persistence, fails soft when storage is blocked
js/app.js             hash router and views
```

**`data/` is the source; `js/skills.js` is compiled from it and committed.**
Pages serves the repo as-is with no build step, a `<script src>` cannot load JSON,
and fetching 500-odd files at runtime would break `file://` and the offline bundle —
hence the compile. After any edit under `data/`, run `node build-data.js`, or the
site deploys unchanged. CI runs `node build-data.js --check` to catch exactly that.

The build validates as it goes and refuses to emit output on: a missing required
field, an id that disagrees with its filename, a level outside Easy/Moderate/Hard,
a duplicate id, a stray `cat` field, or `index.json` disagreeing with the folder.
Adding a category means editing `data/categories.json` and adding a folder —
`index.html` is not involved.

Two other generators, run only when their inputs change:

- `node build-fonts.js` — regenerates `css/fonts.css`. Only if the typefaces change.
- `node build-artifact.js out.html` — bundles everything into one self-contained
  file. Kept for offline/single-file use; it is no longer the delivery route.

## Things to keep true

- **Assets stay relative and routing stays hash-based.** Pages serves this from
  the `/Checklists/` subpath; absolute paths or history-API routing would break
  it and need 404 rewrite rules.
- **`render()` vs `navigate()` vs `rerender()` in app.js.** Only `navigate()`
  scrolls to the top. State changes go through `rerender()`, which holds scroll
  position and restores focus. Do not collapse these back together.
- **Colour means something.** Teal carries completion (ticks, bars, progress),
  ochre is wishlist, red is passed. The four states map to four bar segments,
  the fourth being the unmarked remainder in grey.
- **The bar fills are their own tokens, not the ink tokens.** `--seg-*` are
  validated as a categorical set (lightness band, chroma floor, CVD separation,
  contrast) against the card surface in both themes; `--accent`, `--gold` and
  `--pass` are text colours with a higher contrast floor. Re-run the dataviz
  validator before changing any of them, and never reuse an ink token as a fill.
- **The bar always carries a legend with counts** on the home and category
  pages, so state is never conveyed by colour alone.
- **Learned, wishlisted and passed are mutually exclusive.** Store enforces it —
  setting any one clears the others.
- **Lists are ordered by `sortForDisplay()`, not by data order.** Wishlist first,
  then unmarked, then learned, then passed. Within a section: wishlist oldest
  first (a queue), learned and passed newest first (a log), unmarked
  alphabetically, and alphabetically as the fallback whenever a date is missing
  or two match. Passed skills are visible everywhere — they sink, they do not
  hide — but `inPlay()` still keeps them out of the progress denominators,
  because passing means you do not intend to do it.
- **Hover styling lives inside `@media (hover: hover)`.** A touch browser reports
  `hover:none` and leaves `:hover` stuck on whatever was tapped last. Persistent
  states — `[aria-pressed]`, `:focus-visible`, `:active` — stay outside the guard,
  and a rule that mixes hover with one of them must be split rather than wrapped
  whole, or the state disappears on touch.
- **Every colour is defined on bare `:root` first.** Dark is a token override in
  two guarded blocks. A colour defined only inside a media or `[data-theme]`
  block renders one theme's text on the other theme's ground.
- **Skill copy is specific and honest** — real steps, real failure modes, a
  concrete milestone. Several skills carry genuine safety notes (edible plants,
  charcoal fumes, whip and card throwing, mains wiring, lye, welding, river
  crossings, deep water). Keep them. First aid entries say explicitly that they
  describe what a certified course teaches and do not replace one — that framing
  is deliberate and should not be softened.

## Verifying changes

Chromium and Playwright are available. Serve the repo from a `/Checklists/`
subpath and drive it, rather than trusting a local root-served check:

```sh
python3 -m http.server 8000     # then visit http://localhost:8000
```
