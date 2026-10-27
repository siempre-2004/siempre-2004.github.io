'use strict';
// Apply the saved theme before the stylesheet paints, including on project pages.
(() => {
  const root = document.documentElement;
  let theme = 'light';
  try { if (localStorage.getItem('zh-portfolio-theme') === 'dark') theme = 'dark'; } catch {}
  function updateControls() {
    const dark = theme === 'dark', zh = root.lang.startsWith('zh');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', zh ? (dark ? '切换到浅色模式' : '切换到深色模式') : (dark ? 'Switch to light mode' : 'Switch to dark mode'));
      button.title = button.getAttribute('aria-label');
      const label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = zh ? (dark ? '浅色' : '深色') : (dark ? 'Light' : 'Dark');
    });
  }
  function apply() {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#101310' : '#f5f5ef';
    updateControls();
    window.dispatchEvent(new CustomEvent('portfolio-theme', { detail: { theme } }));
  }
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element) || !event.target.closest('[data-theme-toggle]')) return;
    theme = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('zh-portfolio-theme', theme); } catch {}
    apply();
  });
  document.addEventListener('DOMContentLoaded', updateControls);
  window.addEventListener('portfolio-language', updateControls);
  window.addEventListener('storage', event => {
    if (event.key !== 'zh-portfolio-theme' && event.key !== null) return;
    theme = event.newValue === 'dark' ? 'dark' : 'light';
    apply();
  });
  apply();
})();
