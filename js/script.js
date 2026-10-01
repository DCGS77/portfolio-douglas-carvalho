const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');
const linksMenu = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('aberto');
});

linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('aberto');
  });
});