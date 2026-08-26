# Skill Quest

A static website listing **244 skills you can genuinely learn** in anywhere from a few
focused sessions to a few weeks of practice, organised into 14 categories.

Every skill has its own page with a plain description, the kit you need, a numbered set
of steps to work through, the mistakes that trip people up, and a concrete milestone that
tells you when you can call it learned.

## What it does

- **Browse by category** — 14 categories, each with a progress bar.
- **Tick skills off** — from the list view or from the skill page.
- **Wishlist** — star anything to come back to later.
- **Per-step progress** — tick individual steps on a skill page as you work through them.
- **Notes** — a private practice log on every skill page.
- **The 30-day challenge shortlist** — the 30 skills with the clearest finish line, ranked.
- **Search** — over names, descriptions and categories (press `/` to focus).
- **Light and dark themes** — follows your system setting, with a manual toggle.
- **Export / import / reset** — your data as a JSON file, so it survives a new browser.

All progress is stored in your browser's `localStorage` under the key `skillquest.v1`.
Nothing is uploaded anywhere; there is no backend, no build step and no dependencies.

## Running it

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

It is a plain static site, so it can be hosted as-is on GitHub Pages, Netlify or any
static host.

## Publishing on GitHub Pages

Settings → Pages → Source **Deploy from a branch** → pick this branch and the `/ (root)`
folder → Save. The site appears at `https://<user>.github.io/Checklists/` within a minute
or two.

Nothing needs configuring for the subdirectory: every asset path is relative and routing
is hash-based, so deep links like `#/s/bow-drill` resolve client-side with no 404 rewrite
rules. The empty `.nojekyll` file tells Pages to publish the files as they are instead of
running them through Jekyll.

Note that a Pages deployment and a published Artifact are separate origins, so ticks made
on one do not appear on the other — use Export and Import to move progress between them.

## Layout

```
index.html            page shell, nav, footer
css/styles.css        all styling, light + dark tokens
css/fonts.css         generated — Google Fonts inlined as data URIs
js/categories.js      the 14 categories and their descriptions
js/data/*.js          the skills, one file per category
js/store.js           localStorage persistence (fails soft if storage is blocked)
js/app.js             hash router and views
build-fonts.js        regenerates css/fonts.css (only when the font list changes)
build-artifact.js     bundles everything into one self-contained HTML file
```

## Design

Instrument Serif for titles, Instrument Sans for the interface, IBM Plex Mono for
counts, labels and step numbers. Cool grey-green paper with a deep teal accent that
carries every completion signal — ticks, meters, progress — and a single warm ochre
reserved for wishlist stars: cool means done, warm means wanted. Both themes are
defined at token level, so the page follows the system setting and the manual toggle.

Fonts are inlined as data URIs rather than linked, so the site renders identically
offline and inside a sandboxed viewer. Re-run `node build-fonts.js` only if the
typefaces change.

## Publishing as a single file

```sh
node build-artifact.js out.html
```

Inlines the stylesheet, fonts and all 17 scripts into one self-contained page with no
`<!doctype>`/`<html>`/`<body>` wrapper, for hosting as a Claude Artifact. The page
detects that environment: inside it, exporting your progress goes through the viewer's
`downloads` capability, since a framed page cannot start a download itself.

### Adding a skill

Append an object to the relevant file in `js/data/`:

```js
{
  id:'unique-slug', cat:'outdoors', name:'Skill name',
  time:'1–2 weeks', level:'Easy',            // level: Easy | Moderate | Hard
  blurb:'A sentence or two on what this actually is.',
  gear:['What you need'],
  steps:['Step one.', 'Step two.'],
  tips:['A common mistake.'],
  proof:'The milestone that means you have it.',
  challenge:7                                 // optional: rank on the 30-day shortlist
}
```

The category `id` must match one in `js/categories.js`. No rebuild is needed — reload the page.

## Routes

| Route | Page |
|---|---|
| `#/` | home, categories and overall progress |
| `#/c/<category>` | one category |
| `#/s/<skill>` | one skill |
| `#/list` `#/learned` `#/wishlist` `#/challenge` | filtered lists |
| `#/search/<query>` | search results |
