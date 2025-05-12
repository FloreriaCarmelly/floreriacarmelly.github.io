document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del carrusel
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Efecto smooth scroll para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Animación para los productos al aparecer en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.producto').forEach(producto => {
        producto.style.opacity = 0;
        producto.style.transform = 'translateY(20px)';
        producto.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(producto);
    });

    // Animación para las ocasiones
    document.querySelectorAll('.ocasion').forEach((ocasion, index) => {
        ocasion.style.opacity = 0;
        ocasion.style.transform = 'translateY(20px)';
        ocasion.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        const ocasionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        ocasionObserver.observe(ocasion);
    });

    // Manejo del formulario de contacto
    const contactoForm = document.querySelector('.contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar el código para enviar el formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

});