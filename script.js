document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Reveal ───────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');

  function checkReveal() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add('active');
      }
    });
  }

  // Trigger with a short delay so the hero animation plays visibly on load
  setTimeout(checkReveal, 200);
  window.addEventListener('scroll', checkReveal, { passive: true });


  // ── FAB Navigation ──────────────────────────────────────────
  const fabBtn     = document.getElementById('fab-btn');
  const fabNav     = document.getElementById('fab-nav');
  const fabOverlay = document.getElementById('fab-overlay');

  function openFab() {
    fabNav.classList.add('fab-open');
    fabBtn.classList.add('open');
    fabOverlay.classList.add('active');
    fabBtn.textContent = '+';   // rotated 45° by CSS → looks like ×
  }

  function closeFab() {
    fabNav.classList.remove('fab-open');
    fabBtn.classList.remove('open');
    fabOverlay.classList.remove('active');
    fabBtn.textContent = '☰';
  }

  fabBtn.addEventListener('click', () => {
    fabNav.classList.contains('fab-open') ? closeFab() : openFab();
  });

  fabOverlay.addEventListener('click', closeFab);

  document.querySelectorAll('.fab-item').forEach(item => {
    item.addEventListener('click', closeFab);
  });

});
