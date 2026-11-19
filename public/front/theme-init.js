/* Runs before first paint (blocking <script src> in <head>) so the page never
   shows the wrong theme. External file because the CSP in next.config.ts
   does not allow inline scripts in production. */
(function () {
  var t = null;
  try { t = localStorage.getItem('vani-theme'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', t);
})();
