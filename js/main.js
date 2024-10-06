// Selecciona el botón de toggle y el menú
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Agrega el evento de click para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


function scrollToSection( seccion ) {
    navMenu.classList.toggle('show');
    const section = document.getElementById(seccion);
    section.scrollIntoView({ behavior: "smooth" });
}