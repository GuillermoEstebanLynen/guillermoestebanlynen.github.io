// Selecciona el botón de toggle y el menú
const containerMenu = document.getElementById("containerHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const redesMobile = document.getElementById("redesMobile");

let linkActive = "infoLink";

function checkWindowSize() {
  if (window.innerWidth < 768) {
    // Aquí va tu código cuando el ancho es menor a 768px
    return true;
  }
}

// Agrega el evento de click para mostrar/ocultar el menú
menuToggle.addEventListener("click", () => {
  containerMenu.classList.toggle("expandMobile");
  navMenu.classList.toggle("show");
  redesMobile.classList.toggle("show");
});

function scrollToSection(seccion) {
  // Desactivo link activo anterior
  document.getElementById(linkActive).classList.toggle("active");

  // Activo nuevo link
  linkActive = seccion + "Link";
  document.getElementById(linkActive).classList.toggle("active");

  // Cierro menu movil
  if (checkWindowSize() == true) {
    containerMenu.classList.toggle("expandMobile");
    navMenu.classList.toggle("show");
    redesMobile.classList.toggle("show");
  }

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
