/* Bundles the site into one self-contained HTML page for publishing as an
   Artifact. Reads the same sources the site itself uses, so the two never
   drift. Output has no <!doctype>/<html>/<head>/<body> — the artifact host
   supplies that skeleton. Run: node build-artifact.js */
const fs = require('fs');
const path = require('path');

const read = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const html = read('index.html');

// Everything between <body> and </body>, minus the script tags at the end.
const body = html
  .split('<body>')[1].split('</body>')[0]
  .replace(/<script src="[^"]*"><\/script>\s*/g, '')
  .trim();

// Script order matters: data files populate window.SKILLS before app.js reads it.
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);

const out = [
  '<title>Skill Quest</title>',
  '<style>\n' + read('css/fonts.css') + '\n</style>',
  '<style>\n' + read('css/styles.css') + '\n</style>',
  body,
  ...scripts.map(s => '<script>\n' + read(s) + '\n</script>')
].join('\n');

const dest = process.argv[2] || 'artifact.html';
fs.writeFileSync(dest, out);
console.log('wrote ' + dest + ' — ' + (out.length / 1024).toFixed(0) + ' KB, ' + scripts.length + ' scripts inlined');
