// Smooth scroll to tickets
document.querySelectorAll('[data-scroll]').forEach(function (el) {
  el.addEventListener('click', function () {
    document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
  });
});

// Auto-duplicate scroller items for seamless loop
const scroller = document.querySelector('.logos-scroller');
const items = Array.from(scroller.children);
items.forEach(item => scroller.appendChild(item.cloneNode(true)));