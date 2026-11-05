'use strict';
// This cover arranges the supplied hand-drawn artwork without repainting it.
(() => {
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.renderProjectCover = (kind, prefix = './', label = '') => {
    if (kind !== 'kingdoms') return '';
    return `<div class="kingdoms-cover" role="img" aria-label="${esc(label)}"><img class="kingdoms-cover-board" src="${prefix}assets/projects/kingdoms-board-original.png" alt="" loading="lazy" decoding="async" width="1372" height="1040"><div class="kingdoms-cover-cards" aria-hidden="true"><span class="kingdoms-cover-card card-attack"></span><span class="kingdoms-cover-card card-heal"></span><span class="kingdoms-cover-card card-defense"></span></div></div>`;
  };
})();
