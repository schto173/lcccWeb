// Smooth scroll to tickets section
document.getElementById('heroBtn').addEventListener('click', function () {
  document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('footerBtn').addEventListener('click', function () {
  document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
});

// Buy button click handler
document.querySelectorAll('.buy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Replace this URL with your actual ticket purchase link
    window.open('https://your-ticket-link.com', '_blank');
  });
});