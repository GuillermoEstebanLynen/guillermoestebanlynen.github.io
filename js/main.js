// Selecciona el botón de toggle y el menú
const containerMenu = document.getElementById('containerHeader');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

let linkActive = 'infoLink';

// Agrega el evento de click para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    containerMenu.classList.toggle('expandMobile');
    navMenu.classList.toggle('show');
});

function scrollToSection( seccion ) {
    // Desactivo link activo anterior
    document.getElementById(linkActive).classList.toggle('active');

    // Activo nuevo link
    linkActive = seccion + 'Link';
    document.getElementById( linkActive ).classList.toggle('active');

    // Cierro menu movil
    containerMenu.classList.toggle('expandMobile');
    navMenu.classList.toggle('show');

    // Hago scrool a la seccion correspondiente
    document.getElementById(seccion).scrollIntoView({ behavior: "smooth" });
}