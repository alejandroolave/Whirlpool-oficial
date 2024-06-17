document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var nav = document.getElementById('mobile-nav');
        if (nav.style.left === '-250px' || nav.style.left === '') {
            nav.style.left = '0';
        } else {
            nav.style.left = '-250px';
        }
    });

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var headerOffset = 100; // Adjust this value if your header height changes
            var elementPosition = targetSection.offsetTop;
            var offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Close the mobile nav menu after clicking a link
            document.getElementById('mobile-nav').style.left = '-250px';
        });
    });

    function changeContent() {
        var content = document.querySelector('#inicio .content');

        var contenido = [
            { image: 'https://www.centrodeserviciowhirlpoolenmexico.com.mx/centro_de_servicio_tecnico_whirlpool_cdmx/centro_de_servicio_tecnico_whirlpool_2.jpg', title: 'SERVICIO TECNICO 24/7 PARA CALI Y VALLE DEL CAUCA', number: '¡3113826828!' },
            { image: 'https://www.centrodeserviciowhirlpoolenmexico.com.mx/centro_de_servicio_tecnico_whirlpool_cdmx/centro_de_servicio_tecnico_whirlpool_1.jpg', title: 'LLÁMANOS AHORA MANTENIMIENTO Y REPARACIÓN', number: '¡3113826828!' },
            // Agrega más contenido aquí si es necesario
        ];

        var currentIndex = 0;

        setInterval(function() {
            var currentContent = contenido[currentIndex];

            content.classList.add('hidden');

            setTimeout(function() {
                content.querySelector('#image').src = currentContent.image;
                content.querySelector('#title').innerText = currentContent.title;
                content.querySelector('#number').innerText = currentContent.number;

                content.classList.remove('hidden');

                currentIndex = (currentIndex + 1) % contenido.length;
            }, 1000); // Duración de la animación de salida
        }, 5000); // Duración total del ciclo de cambio (incluyendo animación)
    }

    changeContent();
});







function changeTitle() {
    var titles = ['Instalación', 'Mantenimiento', 'Reparación'];
    var currentIndex = 0;

    setInterval(function() {
        document.getElementById('dynamic-title').innerText = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }, 2000); // Cambiar el título cada 2 segundos
}

// Llamar a la función para iniciar el cambio dinámico de título
changeTitle();










document.addEventListener('DOMContentLoaded', function() {
    var whatsappBtns = document.querySelectorAll('.whatsapp-btn');
    
    whatsappBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var number = this.getAttribute('data-number');
            window.open('https://wa.me/' + number, '_blank');
        });
    });
});
