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
