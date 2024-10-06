// Selecciona el botón de toggle y el menú
const containerMenu = document.getElementById('containerHeader');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Agrega el evento de click para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    containerMenu.classList.toggle('expandMobile');
    navMenu.classList.toggle('show');
});

function scrollToSection( seccion ) {
    containerMenu.classList.toggle('expandMobile');
    navMenu.classList.toggle('show');
    const section = document.getElementById(seccion);
    section.scrollIntoView({ behavior: "smooth" });
}