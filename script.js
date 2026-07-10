// Función para cambiar entre los temas (claro/oscuro)
const toggleModo = document.getElementById('toggle-modo');

// Verifica el tema actual y aplica el cambio
toggleModo.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-tema');
  
  if (currentTheme === 'claro') {
    document.documentElement.setAttribute('data-tema', 'oscuro');
  } else {
    document.documentElement.setAttribute('data-tema', 'claro');
  }
});

// Animación de desvanecimiento de la sección de inicio
document.addEventListener('DOMContentLoaded', () => {
  const inicioSection = document.querySelector('.inicio');
  
  if (inicioSection) {
    inicioSection.classList.add('fade-in');
  }
});

// Función para el menú fijo
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  });
}
