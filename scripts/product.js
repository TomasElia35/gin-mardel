
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
function increment() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateBuyButton();
}

function decrement() {
    var quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateBuyButton();
    }
}

function updateBuyButton() {
    var quantity = document.getElementById('quantity').value;
    var buyButton = document.getElementById('buyButton');
    buyButton.href = `https://wa.me/1234567890?text=Hola,%20quiero%20comprar%20el%20Gin%20Tonic%20Clásico%20cantidad:%20${quantity}`;
}

// Actualizar la visualización del carrito
// Inicializar carrito
const cart = [];

// Función para incrementar cantidad
function increment(id) {
    const input = document.getElementById(id);
    if (input) input.value = parseInt(input.value) + 1;
}

// Función para decrementar cantidad
function decrement(id) {
    const input = document.getElementById(id);
    if (input && input.value > 1) input.value = parseInt(input.value) - 1;
}

// Función para agregar al carrito
function addToCart(name, price, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }
    updateCartDisplay();
}

// Función para actualizar el carrito
function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cartCount").textContent = cartCount;

    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const listItem = document.createElement("li");
        listItem.className = "flex justify-between";
        listItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(listItem);
    });

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

// Alternar visibilidad del carrito
document.getElementById("cartButton").addEventListener("click", () => {
    const cartDetails = document.getElementById("cartDetails");
    cartDetails.classList.toggle("hidden");
});

// Evento para el botón de finalizar compra
document.getElementById("buyButton").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    // Generar el mensaje de WhatsApp
    const baseUrl = "https://wa.me/2235298074?text=";
    let message = "Hola,%20quiero%20comprar%20los%20siguientes%20productos:%20";

    // Agregar los productos y cantidades al mensaje
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        message += `${item.name}%20(cantidad:%20${item.quantity})%20-%20`;
    });

    message = message.slice(0, -3); // Eliminar el último guion

    // Agregar el subtotal al mensaje
    message += `%0A%0AEl%20subtotal%20es:%20$${subtotal.toFixed(2)}`;

    // Redirigir al enlace de WhatsApp
    window.open(baseUrl + message, "_blank");
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.slide-in');
    const backToTopButton = document.getElementById('back-to-top');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        // Mostrar/Ocultar el botón de volver arriba
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para verificar la visibilidad al cargar la página
});

// Función para volver arriba
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in, .zoom-in'); // Selecciona ambas animaciones
    const backToTopButton = document.getElementById('back-to-top');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        // Mostrar/Ocultar el botón de volver arriba
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para verificar la visibilidad al cargar la página
});

// Función para volver arriba
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
