document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('wrapper');
  const menu = document.getElementById('site-navigation');
  if (!toggle || !menu) return;
  const mobile = window.matchMedia('(max-width: 767px)');
  const icon = toggle.querySelector('.menu');
  function setOpen(open, restoreFocus) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.classList.toggle('nav-bg', open);
    if (icon) icon.classList.toggle('close', open);
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false, true);
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-top')) setOpen(false);
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  function resetOnResize() {
    const focusInMenu = menu.contains(document.activeElement);
    setOpen(false, mobile.matches && focusInMenu);
  }
  if (mobile.addEventListener) mobile.addEventListener('change', resetOnResize);
  else mobile.addListener(resetOnResize);
});
