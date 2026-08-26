/* Persistence layer. Everything lives in one localStorage key, guarded so the
   app still runs when storage is unavailable (private windows, blocked cookies). */
(function () {
  var KEY = 'skillquest.v1';
  var mem = null;               // fallback when localStorage throws
  var ok = true;

  function blank() { return { done: {}, wish: {}, pass: {}, notes: {}, steps: {}, theme: null }; }

  function read() {
    if (mem) return mem;
    var s = blank();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === 'object') {
          s.done  = p.done  && typeof p.done  === 'object' ? p.done  : {};
          s.wish  = p.wish  && typeof p.wish  === 'object' ? p.wish  : {};
          s.pass  = p.pass  && typeof p.pass  === 'object' ? p.pass  : {};
          s.notes = p.notes && typeof p.notes === 'object' ? p.notes : {};
          s.steps = p.steps && typeof p.steps === 'object' ? p.steps : {};
          s.theme = p.theme || null;
        }
      }
    } catch (e) { ok = false; }
    mem = s;
    return s;
  }

  function write() {
    if (!ok) return;
    try { localStorage.setItem(KEY, JSON.stringify(mem)); }
    catch (e) { ok = false; }
  }

  window.Store = {
    available: function () { return ok; },
    all: read,

    isDone:  function (id) { return !!read().done[id]; },
    doneAt:  function (id) { return read().done[id] || null; },
    isWish:  function (id) { return !!read().wish[id]; },
    wishAt:  function (id) { return read().wish[id] || null; },
    isPass:  function (id) { return !!read().pass[id]; },
    passAt:  function (id) { return read().pass[id] || null; },

    toggleDone: function (id) {
      var s = read();
      if (s.done[id]) { delete s.done[id]; }
      else { s.done[id] = new Date().toISOString(); delete s.wish[id]; delete s.pass[id]; }
      write();
      return !!s.done[id];
    },
    toggleWish: function (id) {
      var s = read();
      if (s.wish[id]) { delete s.wish[id]; }
      else { s.wish[id] = Date.now(); delete s.pass[id]; }
      write();
      return !!s.wish[id];
    },
    togglePass: function (id) {
      var s = read();
      if (s.pass[id]) { delete s.pass[id]; }
      else { s.pass[id] = Date.now(); delete s.wish[id]; delete s.done[id]; }
      write();
      return !!s.pass[id];
    },

    note: function (id, value) {
      var s = read();
      if (value === undefined) return s.notes[id] || '';
      if (value) { s.notes[id] = value; } else { delete s.notes[id]; }
      write();
    },

    stepDone: function (id, i) { var a = read().steps[id]; return !!(a && a[i]); },
    toggleStep: function (id, i) {
      var s = read();
      var a = s.steps[id] || (s.steps[id] = []);
      a[i] = !a[i];
      if (a.every(function (v) { return !v; })) delete s.steps[id];
      write();
      return !!(s.steps[id] && s.steps[id][i]);
    },
    stepCount: function (id) {
      var a = read().steps[id] || [];
      return a.filter(Boolean).length;
    },

    counts: function () {
      var s = read();
      return {
        done: Object.keys(s.done).length,
        wish: Object.keys(s.wish).length,
        pass: Object.keys(s.pass).length
      };
    },

    theme: function (v) {
      var s = read();
      if (v === undefined) return s.theme;
      s.theme = v; write();
    },

    exportJSON: function () {
      return JSON.stringify({ app: 'skillquest', version: 1, exported: new Date().toISOString(), data: read() }, null, 2);
    },
    importJSON: function (text) {
      var p = JSON.parse(text);
      var d = p && p.data ? p.data : p;
      if (!d || typeof d !== 'object') throw new Error('Unrecognised file');
      var s = read();
      ['done', 'wish', 'pass', 'notes', 'steps'].forEach(function (k) {
        if (d[k] && typeof d[k] === 'object') {
          Object.keys(d[k]).forEach(function (id) { s[k][id] = d[k][id]; });
        }
      });
      write();
    },
    reset: function () { mem = blank(); try { localStorage.removeItem(KEY); } catch (e) {} }
  };
})();
