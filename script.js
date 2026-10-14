const contactForm = document.getElementById('contactForm');
const messageStatus = document.getElementById('msgStatus');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  messageStatus.style.display = 'block';
  contactForm.reset();

  window.setTimeout(function () {
    messageStatus.style.display = 'none';
  }, 3000);
});
