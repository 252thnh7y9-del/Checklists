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

## Layout

```
index.html            page shell, nav, footer
css/styles.css        all styling, light + dark tokens
js/categories.js      the 14 categories and their descriptions
js/data/*.js          the skills, one file per category
js/store.js           localStorage persistence (fails soft if storage is blocked)
js/app.js             hash router and views
```

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
