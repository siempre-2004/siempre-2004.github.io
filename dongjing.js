'use strict';
// Development captures come from the user's Nov 16–18 project screenshots.
// Only the image/viewport regions are extracted; no scene content is repainted.
(() => {
  const photos = [...document.querySelectorAll('[data-dj-zoom]')];
  const dialog = document.querySelector('#dj-gallery-dialog');
  if (!dialog || !photos.length) return;
  const image = dialog.querySelector('#dj-lightbox-image');
  const caption = dialog.querySelector('#dj-lightbox-caption');
  const count = dialog.querySelector('#dj-lightbox-count');
  const close = dialog.querySelector('#dj-lightbox-close');
  const previous = dialog.querySelector('#dj-lightbox-prev');
  const next = dialog.querySelector('#dj-lightbox-next');
  let selected = 0;
  let wasLocked = false;

  const language = () => document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  function show(index) {
    selected = (index + photos.length) % photos.length;
    const photo = photos[selected];
    image.src = photo.dataset.djSrc;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = [...photo.closest('figure').querySelector('figcaption').children]
      .map(el => el.textContent.trim()).join(' · ');
    count.textContent = `${selected + 1} / ${photos.length}`;
  }
  function syncLanguage() {
    const lang = language();
    const strings = window.PORTFOLIO.translations[lang];
    document.querySelectorAll('[data-dj-alt]').forEach(img => {
      img.alt = strings[img.dataset.djAlt];
    });
    photos.forEach(photo => {
      const title = photo.closest('figure').querySelector('h4')?.textContent || strings.djHeroCaption;
      photo.setAttribute('aria-label', `${lang === 'zh' ? '放大图片：' : 'Enlarge image: '}${title}`);
    });
    close.setAttribute('aria-label', lang === 'zh' ? '关闭图片' : 'Close image');
    previous.setAttribute('aria-label', lang === 'zh' ? '上一张图片' : 'Previous image');
    next.setAttribute('aria-label', lang === 'zh' ? '下一张图片' : 'Next image');
    document.querySelector('.dj-nav').setAttribute('aria-label', lang === 'zh' ? '东京梦华录项目内容' : 'Dongjing project contents');
    if (dialog.open) show(selected);
  }
  photos.forEach((photo, index) => photo.addEventListener('click', () => {
    show(index);
    wasLocked = document.body.classList.contains('dialog-open');
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }));
  close.addEventListener('click', () => dialog.close());
  previous.addEventListener('click', () => show(selected - 1));
  next.addEventListener('click', () => show(selected + 1));
  dialog.addEventListener('close', () => {
    if (!wasLocked) document.body.classList.remove('dialog-open');
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(selected + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  window.addEventListener('portfolio-language', syncLanguage);
  syncLanguage();
})();
