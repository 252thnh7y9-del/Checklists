/* Skill Quest — hash-routed static app. No build step, no dependencies. */
(function () {
  var SKILLS = window.SKILLS || [];
  var CATS   = window.CATEGORIES || [];
  var byId   = {}, byCat = {};

  CATS.forEach(function (c) { byCat[c.id] = []; });
  SKILLS.forEach(function (s) {
    byId[s.id] = s;
    (byCat[s.cat] || (byCat[s.cat] = [])).push(s);
  });
  function catName(id) { var c = CATS.filter(function (x) { return x.id === id; })[0]; return c ? c.name : id; }

  var main    = document.getElementById('main');
  var search  = document.getElementById('search');
  var toastEl = document.getElementById('toast');

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function hl(text, q) {
    var out = esc(text);
    if (!q) return out;
    var needle = esc(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    try { return out.replace(new RegExp('(' + needle + ')', 'ig'), '<mark>$1</mark>'); }
    catch (e) { return out; }
  }
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }
  function pct(done, total) { return total ? Math.round(done / total * 100) : 0; }
  function doneIn(list) { return list.filter(function (s) { return Store.isDone(s.id); }).length; }
  function niceDate(iso) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d)) return '';
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }

  /* ---------- shared fragments ---------- */
  function rowHTML(s, q, hideCat) {
    var done = Store.isDone(s.id), wish = Store.isWish(s.id);
    var steps = Store.stepCount(s.id);
    var sub = ['<b>' + esc(s.level) + '</b>', esc(s.time)];
    if (!hideCat) sub.push(esc(catName(s.cat)));
    if (!done && steps) sub.push(steps + '/' + s.steps.length + ' steps done');
    if (done && Store.doneAt(s.id)) sub.push('✓ ' + niceDate(Store.doneAt(s.id)));
    return '' +
      '<div class="row' + (done ? ' is-done' : '') + '">' +
        '<button class="tick" data-toggle-done="' + esc(s.id) + '" aria-pressed="' + done + '" ' +
          'aria-label="' + (done ? 'Mark not learned' : 'Mark as learned') + ': ' + esc(s.name) + '">✓</button>' +
        '<a class="row-main" href="#/s/' + esc(s.id) + '">' +
          '<span class="row-name">' + hl(s.name, q) + (s.challenge ? ' <span class="badge">30-day #' + s.challenge + '</span>' : '') + '</span>' +
          '<span class="row-sub">' + sub.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</span>' +
        '</a>' +
        '<button class="star" data-toggle-wish="' + esc(s.id) + '" aria-pressed="' + wish + '" ' +
          'aria-label="' + (wish ? 'Remove from wishlist' : 'Add to wishlist') + ': ' + esc(s.name) + '">' + (wish ? '★' : '☆') + '</button>' +
        '<span class="chev" aria-hidden="true">›</span>' +
      '</div>';
  }
  function rowsHTML(list, q, hideCat) {
    return '<div class="rows">' +
      list.map(function (s) { return rowHTML(s, q, hideCat); }).join('') + '</div>';
  }
  function chipsHTML(active) {
    var items = [
      ['#/', 'all', 'All categories'],
      ['#/list', 'list', 'Every skill'],
      ['#/wishlist', 'wishlist', 'Wishlist'],
      ['#/learned', 'learned', 'Learned'],
      ['#/challenge', 'challenge', '30-day challenge']
    ];
    return '<div class="toolbar"><div class="chips">' + items.map(function (i) {
      return '<a class="chip' + (i[1] === active ? ' on' : '') + '" href="' + i[0] + '">' + i[2] + '</a>';
    }).join('') + '</div></div>';
  }
  function emptyHTML(title, body) {
    return '<div class="empty"><h3>' + esc(title) + '</h3><p>' + body + '</p></div>';
  }

  /* ---------- views ---------- */
  function viewHome() {
    var total = SKILLS.length, done = doneIn(SKILLS), c = Store.counts();
    var wishList = SKILLS.filter(function (s) { return Store.isWish(s.id); }).slice(0, 3);

    var html = '' +
      '<section class="hero">' +
        '<h1>' + total + ' skills you can actually <em>finish</em>.</h1>' +
        '<p>Every skill here is reachable in anywhere from a few focused sessions to a few weeks of practice. ' +
          'Open one for a plain description, the kit you need, the steps to work through, and the moment you get to call it learned.</p>' +
        '<div class="stats">' +
          '<div class="stat"><b>' + total + '</b><span>Skills</span></div>' +
          '<div class="stat done"><b>' + done + '</b><span>Learned</span></div>' +
          '<div class="stat wish"><b>' + c.wish + '</b><span>Wishlist</span></div>' +
          '<div class="stat"><b>' + pct(done, total) + '%</b><span>Complete</span></div>' +
        '</div>' +
      '</section>' +
      chipsHTML('all');

    if (wishList.length) {
      html += '<div class="sec-head"><h2>Up next from your wishlist</h2>' +
              '<a class="muted" href="#/wishlist">See all ' + c.wish + ' →</a></div>' + rowsHTML(wishList);
    }

    html += '<div class="sec-head"><h2>Browse by category</h2><span class="muted">' + CATS.length + ' categories</span></div>' +
      '<div class="grid">' + CATS.map(function (cat) {
        var list = byCat[cat.id] || [], d = doneIn(list);
        return '<a class="cat-card" href="#/c/' + cat.id + '">' +
            '<span class="cat-count">' + list.length + ' skills</span>' +
            '<h3>' + esc(cat.name) + '</h3><p>' + esc(cat.blurb) + '</p>' +
            '<div class="meter"><i style="width:' + pct(d, list.length) + '%"></i></div>' +
            '<div class="cat-foot"><span>' + d + ' learned</span><span>' + pct(d, list.length) + '%</span></div>' +
          '</a>';
      }).join('') + '</div>';

    main.innerHTML = html;
  }

  function viewCategory(id) {
    var cat = CATS.filter(function (c) { return c.id === id; })[0];
    if (!cat) return viewMissing();
    var list = byCat[id] || [], d = doneIn(list);
    main.innerHTML = '' +
      '<p class="crumbs"><a href="#/">All categories</a> › ' + esc(cat.name) + '</p>' +
      '<div class="page-head">' +
        '<h1>' + esc(cat.name) + '</h1>' +
        '<p>' + esc(cat.blurb) + '</p>' +
        '<div class="stats"><div class="stat"><b>' + list.length + '</b><span>Skills</span></div>' +
          '<div class="stat done"><b>' + d + '</b><span>Learned</span></div>' +
          '<div class="stat"><b>' + pct(d, list.length) + '%</b><span>Complete</span></div></div>' +
      '</div>' + rowsHTML(list, null, true);
  }

  function viewList(kind) {
    var list, title, blurb, empty;
    if (kind === 'wishlist') {
      list = SKILLS.filter(function (s) { return Store.isWish(s.id); });
      title = 'Your wishlist'; blurb = 'Skills you have starred to come back to. Starring is just a bookmark — nothing here counts as learned until you tick it off.';
      empty = emptyHTML('Nothing starred yet', 'Tap the ☆ next to any skill to park it here for later.');
    } else if (kind === 'learned') {
      list = SKILLS.filter(function (s) { return Store.isDone(s.id); })
                   .sort(function (a, b) { return (Store.doneAt(b.id) || '').localeCompare(Store.doneAt(a.id) || ''); });
      title = 'Learned'; blurb = 'Everything you have ticked off, newest first.';
      empty = emptyHTML('Nothing ticked off yet', 'Tick the box on any skill once you can do it on demand, cold.');
    } else if (kind === 'challenge') {
      list = SKILLS.filter(function (s) { return s.challenge; })
                   .sort(function (a, b) { return a.challenge - b.challenge; });
      title = 'The 30-day challenge shortlist';
      blurb = 'Thirty skills with a clear finish line and something worth demonstrating at the end of it. Pick one, give it a month, and you will have the whole thing rather than a taste of it.';
    } else {
      list = SKILLS.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
      title = 'Every skill'; blurb = 'All ' + SKILLS.length + ' skills in one alphabetical list.';
    }
    var d = doneIn(list);
    main.innerHTML = '' +
      '<p class="crumbs"><a href="#/">All categories</a> › ' + esc(title) + '</p>' +
      '<div class="page-head"><h1>' + esc(title) + '</h1><p>' + esc(blurb) + '</p>' +
        (list.length ? '<div class="stats"><div class="stat"><b>' + list.length + '</b><span>Skills</span></div>' +
          '<div class="stat done"><b>' + d + '</b><span>Learned</span></div></div>' : '') +
      '</div>' + chipsHTML(kind) +
      (list.length ? rowsHTML(list) : empty);
  }

  function viewSearch(q) {
    var needle = q.toLowerCase();
    var list = SKILLS.filter(function (s) {
      return (s.name + ' ' + s.blurb + ' ' + catName(s.cat) + ' ' + (s.tags || '')).toLowerCase().indexOf(needle) > -1;
    });
    main.innerHTML = '' +
      '<p class="crumbs"><a href="#/">All categories</a> › Search</p>' +
      '<div class="page-head"><h1>' + list.length + ' result' + (list.length === 1 ? '' : 's') + ' for “' + esc(q) + '”</h1></div>' +
      (list.length ? rowsHTML(list, q)
                   : emptyHTML('No matches', 'Try a broader word — “fire”, “cards”, “knife”, “dance”.'));
  }

  function viewSkill(id) {
    var s = byId[id];
    if (!s) return viewMissing();
    var list = byCat[s.cat] || [], i = list.indexOf(s);
    var prev = list[i - 1], next = list[i + 1];
    var done = Store.isDone(s.id), wish = Store.isWish(s.id);

    var facts = [['Time to competence', s.time], ['Level', s.level]];
    if (s.challenge) facts.push(['30-day shortlist', '#' + s.challenge]);

    main.innerHTML = '' +
      '<p class="crumbs"><a href="#/">All categories</a></p>' +
      '<div class="detail">' +
        '<article>' +
          '<a class="kicker" href="#/c/' + esc(s.cat) + '">' + esc(catName(s.cat)) + '</a>' +
          '<h1>' + esc(s.name) + '</h1>' +
          '<p class="lede">' + esc(s.blurb) + '</p>' +
          '<div class="facts">' + facts.map(function (f) {
            return '<div class="fact"><b>' + esc(f[0]) + '</b>' + esc(f[1]) + '</div>';
          }).join('') + '</div>' +

          '<div class="block"><h2>How to learn it</h2><ol class="steps">' +
            s.steps.map(function (t, n) {
              return '<li><button class="step-check" data-step="' + n + '" data-skill="' + esc(s.id) + '" ' +
                'aria-pressed="' + Store.stepDone(s.id, n) + '" aria-label="Toggle step ' + (n + 1) + '"></button>' +
                '<span class="step-text">' + esc(t) + '</span></li>';
            }).join('') + '</ol></div>' +

          (s.tips && s.tips.length ? '<div class="block"><h2>Things that trip people up</h2><ul class="bullets">' +
            s.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' : '') +

          '<div class="proof"><b>You can call it learned when</b><p>' + esc(s.proof) + '</p></div>' +

          '<div class="nextprev">' +
            (prev ? '<a href="#/s/' + esc(prev.id) + '"><span>Previous</span>' + esc(prev.name) + '</a>' : '') +
            (next ? '<a href="#/s/' + esc(next.id) + '"><span>Next</span>' + esc(next.name) + '</a>' : '') +
          '</div>' +
        '</article>' +

        '<aside class="side">' +
          '<div class="panel">' +
            '<button class="btn ' + (done ? 'done-state' : 'primary') + '" data-toggle-done="' + esc(s.id) + '">' +
              (done ? '✓ Learned' : 'Mark as learned') + '</button>' +
            '<button class="btn ' + (wish ? 'wished' : '') + '" data-toggle-wish="' + esc(s.id) + '">' +
              (wish ? '★ On your wishlist' : '☆ Add to wishlist') + '</button>' +
            (done && Store.doneAt(s.id) ? '<small>Ticked off ' + esc(niceDate(Store.doneAt(s.id))) + '</small>' : '') +
          '</div>' +
          (s.gear && s.gear.length ? '<div class="panel"><h3>What you need</h3><ul class="gearlist">' +
            s.gear.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul></div>' : '') +
          '<div class="panel"><h3>Your notes</h3>' +
            '<textarea id="note" placeholder="Practice log, times, what finally clicked…">' + esc(Store.note(s.id)) + '</textarea></div>' +
        '</aside>' +
      '</div>';

    var note = document.getElementById('note');
    var t;
    note.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { Store.note(s.id, note.value); }, 400);
    });
    note.addEventListener('blur', function () { Store.note(s.id, note.value); });
  }

  function viewMissing() {
    main.innerHTML = emptyHTML('Page not found', 'That link does not match a skill. <a href="#/">Back to all categories</a>.');
  }

  /* ---------- routing ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    if (parts[0] !== 'search' && search.value) search.value = '';

    if (!parts[0])                        viewHome();
    else if (parts[0] === 'c' && parts[1]) viewCategory(parts[1]);
    else if (parts[0] === 's' && parts[1]) viewSkill(parts[1]);
    else if (parts[0] === 'search')        viewSearch(decodeURIComponent(parts.slice(1).join('/')));
    else if (['wishlist', 'learned', 'challenge', 'list'].indexOf(parts[0]) > -1) viewList(parts[0]);
    else viewMissing();

    document.querySelectorAll('[data-nav]').forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('data-nav') === parts[0]);
    });
    syncCounters();
    window.scrollTo(0, 0);
  }

  function syncCounters() {
    var c = Store.counts();
    document.getElementById('nav-wish').textContent = c.wish;
    document.getElementById('nav-done').textContent = c.done;
    document.getElementById('topprogress-bar').style.width = pct(c.done, SKILLS.length) + '%';
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var d = e.target.closest('[data-toggle-done]');
    if (d) {
      var id = d.getAttribute('data-toggle-done');
      var now = Store.toggleDone(id);
      toast(now ? '✓ ' + byId[id].name + ' — learned' : 'Un-ticked ' + byId[id].name);
      route();
      return;
    }
    var w = e.target.closest('[data-toggle-wish]');
    if (w) {
      var wid = w.getAttribute('data-toggle-wish');
      var on = Store.toggleWish(wid);
      toast(on ? '★ Added to wishlist' : 'Removed from wishlist');
      route();
      return;
    }
    var st = e.target.closest('[data-step]');
    if (st) {
      var on2 = Store.toggleStep(st.getAttribute('data-skill'), +st.getAttribute('data-step'));
      st.setAttribute('aria-pressed', on2);
    }
  });

  var searchTimer;
  search.addEventListener('input', function () {
    clearTimeout(searchTimer);
    var q = search.value.trim();
    searchTimer = setTimeout(function () {
      if (q.length > 1) {
        var target = '#/search/' + encodeURIComponent(q);
        if (location.hash === target) viewSearch(q); else location.hash = target;
      } else if (location.hash.indexOf('#/search') === 0) {
        location.hash = '#/';
      }
    }, 200);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== search &&
        !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault(); search.focus();
    }
    if (e.key === 'Escape' && document.activeElement === search) { search.value = ''; search.blur(); }
  });

  /* theme */
  var root = document.documentElement;
  function applyTheme(t) { root.setAttribute('data-theme', t); }
  var stamped = root.getAttribute('data-theme');
  var osDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(Store.theme() || stamped || (osDark ? 'dark' : 'light'));
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next); Store.theme(next);
  });

  /* Backup controls. A page framed by the claude.ai artifact viewer cannot
     start its own download, so route saves through the downloads capability
     when the viewer grants it, and hide the control when it does not. Served
     as an ordinary web page, the anchor below still works. */
  var exportBtn = document.getElementById('export-btn');
  var downloads = null;
  if (window.claude && typeof window.claude.use === 'function') {
    exportBtn.hidden = true;
    window.claude.use('downloads').then(function (d) {
      if (d) { downloads = d; exportBtn.hidden = false; }
    }, function () {});
  }
  exportBtn.addEventListener('click', function () {
    var json = Store.exportJSON();
    if (downloads) {
      downloads.save({ filename: 'skillquest-progress.json', data: json })
        .then(function () { toast('Progress saved'); })
        .catch(function (err) {
          if (err && err.code === 'declined') return;
          toast('That file could not be saved');
        });
      return;
    }
    var blob = new Blob([json], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'skillquest-progress.json';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });
  var file = document.getElementById('import-file');
  document.getElementById('import-btn').addEventListener('click', function () { file.click(); });
  file.addEventListener('change', function () {
    var f = file.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try { Store.importJSON(r.result); toast('Backup merged in'); route(); }
      catch (err) { toast('That file could not be read'); }
      file.value = '';
    };
    r.readAsText(f);
  });
  document.getElementById('reset-btn').addEventListener('click', function () {
    if (confirm('Clear every tick, star and note stored in this browser? This cannot be undone.')) {
      Store.reset(); toast('Everything cleared'); route();
    }
  });

  window.addEventListener('hashchange', route);
  if (!Store.available()) {
    setTimeout(function () { toast('Local storage is blocked — progress will not survive a reload'); }, 800);
  }
  route();
})();
