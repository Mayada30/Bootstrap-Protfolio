// Bootstrap's JS bundle (loaded from CDN in each page) already handles the
// mobile menu. This file only adds the contact-form validation.
(() => {
  'use strict';
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
})();
