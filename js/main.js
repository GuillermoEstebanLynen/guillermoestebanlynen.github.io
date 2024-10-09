// Selecciona el botón de toggle y el menú
const containerMenu = document.getElementById("containerHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

let linkActive = "infoLink";

// Agrega el evento de click para mostrar/ocultar el menú
menuToggle.addEventListener("click", () => {
  containerMenu.classList.toggle("expandMobile");
  navMenu.classList.toggle("show");
});

function scrollToSection(seccion) {
  // Desactivo link activo anterior
  document.getElementById(linkActive).classList.toggle("active");

  // Activo nuevo link
  linkActive = seccion + "Link";
  document.getElementById(linkActive).classList.toggle("active");

  // Cierro menu movil
  containerMenu.classList.toggle("expandMobile");
  navMenu.classList.toggle("show");

  // Hago scrool a la seccion correspondiente
  document.getElementById(seccion).scrollIntoView({ behavior: "smooth" });
}

// Usamos Intersection Observer para observar las barras de progreso
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  // Configuración del observador
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          // Activa la animación estableciendo el atributo data-filled en "true"
          bar.setAttribute("data-filled", "true");
          // Deja de observar esta barra después de que se llene
          observer.unobserve(bar);
        }
      });
    },
    {
      threshold: 0.5, // Empieza la animación cuando el 50% del elemento es visible
    }
  );

  // Observa cada barra de progreso
  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});
