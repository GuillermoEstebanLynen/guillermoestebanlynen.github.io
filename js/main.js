// Selecciono elementos para el menu Mobile
const botonMenu = document.getElementById('button-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Evento para el menu mobile
botonMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('visible');
});