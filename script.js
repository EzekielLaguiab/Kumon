  const reveals = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();