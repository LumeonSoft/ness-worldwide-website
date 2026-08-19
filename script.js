const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const modal = document.querySelector('.product-modal');
const modalPanel = document.querySelector('.product-modal-panel');
const modalTrigger = document.querySelector('.product-details-trigger');
const modalCloseElements = document.querySelectorAll('[data-close-modal]');
const modalContact = document.querySelector('[data-modal-contact]');

function openProductModal() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalPanel.focus();
}

function closeProductModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalTrigger.focus();
}

modalTrigger.addEventListener('click', openProductModal);
modalCloseElements.forEach((element) => element.addEventListener('click', closeProductModal));
modalContact.addEventListener('click', closeProductModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    closeProductModal();
  }
});
