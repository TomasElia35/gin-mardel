// JavaScript optimizado con debounce
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

window.addEventListener(
    'scroll',
    debounce(() => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100)
);

// JavaScript para el menú hamburguesa
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Mostrar botón "Volver arriba"
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que se recargue la página al hacer clic en el botón.

    // Recoger los valores de los campos del formulario.
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const direccion = document.getElementById('name').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    // Validar que los campos no estén vacíos.
    if (!nombre || !apellido || !direccion || !mensaje) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }

    // Generar el mensaje.
    const entrega = `Me llamo ${nombre}, ${apellido}. Vivo en la calle ${direccion} y tengo una consulta: ${mensaje}.`;

    // Reemplazar espacios y caracteres especiales para la URL de WhatsApp.
    const mensajeEncoded = encodeURIComponent(entrega);

    // Número de WhatsApp de la empresa.
    const telefono = "2235298074"; // Reemplaza con el número de WhatsApp de tu empresa.

    // Redirigir a WhatsApp.
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeEncoded}`;
    window.open(urlWhatsApp, '_blank'); // Abrir en una nueva pestaña.
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, footer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Agregar animación al entrar en la vista
                entry.target.classList.remove('opacity-0'); // Mostrar el contenido
                entry.target.classList.add('animate__animated', 'animate__fadeIn');

                // Eliminar animación para que se pueda reiniciar más tarde
                setTimeout(() => {
                    entry.target.classList.remove('animate__fadeIn');
                }, 1000); // Duración de la animación
            } else {
                // Reiniciar cuando salga de la vista
                entry.target.classList.add('opacity-0');
            }
        });
    }, { threshold: 0.2 });

    // Aplicar el observador a todas las secciones
    sections.forEach((section) => {
        section.classList.add('opacity-0'); // Ocultar inicialmente
        observer.observe(section);
    });
});