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

A dependency-free static site: 423 skills in 21 categories, each with its own
page. No build step for the site itself — `index.html` loads the CSS and the
scripts directly, in order.

```
index.html        shell, nav, footer
css/styles.css    all styling; light/dark defined at token level
css/fonts.css     generated — Google Fonts inlined as data URIs
js/categories.js  the 14 categories
js/data/*.js      the skills, one file per category (21 files)
js/store.js       localStorage persistence, fails soft when storage is blocked
js/app.js         hash router and views
```

Two generators, run only when their inputs change:

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
  setting any one clears the others. Passed skills are filtered out of every view
  except the Passed tab, via `inPlay()` in app.js, and out of the progress
  denominators with them.
- **Every colour is defined on bare `:root` first.** Dark is a token override in
  two guarded blocks. A colour defined only inside a media or `[data-theme]`
  block renders one theme's text on the other theme's ground.
- **Every category needs a `<script>` tag in index.html.** Adding a data file
  without one silently drops the whole category; the bundler reads its script
  list from that markup too.
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
