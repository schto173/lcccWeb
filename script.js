// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

// Smooth scroll for any in-page anchor triggers
document.querySelectorAll('[data-scroll]').forEach(function (el) {
  el.addEventListener('click', function () {
    const target = document.getElementById('tickets');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Auto-duplicate scroller items for seamless loop (only when present)
const scroller = document.querySelector('.logos-scroller');
if (scroller) {
  const items = Array.from(scroller.children);
  items.forEach(item => scroller.appendChild(item.cloneNode(true)));
}

// ===== Impressions carousel / slideshow =====
(function () {
  const carousel = document.getElementById('impressions-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  if (!track || slides.length === 0) return;

  let current = 0;
  const total = slides.length;
  const AUTOPLAY_MS = 4000;
  let timer = null;

  // Build navigation dots dynamically (one per slide)
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
    dot.addEventListener('click', function () {
      goTo(i);
      restartAutoplay();
    });
    dotsContainer.appendChild(dot);
    return dot;
  });

  function update() {
    track.style.transform = 'translateX(' + (-current * 100) + '%)';
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  function goTo(index) {
    current = (index + total) % total;
    update();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    timer = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }
  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  if (nextBtn) nextBtn.addEventListener('click', function () { next(); restartAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restartAutoplay(); });

  // Pause on hover for better UX
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  // Basic touch / swipe support
  let startX = 0;
  track.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });
  track.addEventListener('touchend', function (e) {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 40) prev();
    else if (dx < -40) next();
    startAutoplay();
  }, { passive: true });

  update();
  startAutoplay();
})();
