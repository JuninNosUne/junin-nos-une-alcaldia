/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /* Menu show */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.add('show-menu');
            }
        });
    }

    /* Menu hidden */
    if (navClose) {
        navClose.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            }
        });
    }
});

/*=============== ADJUST LOGO ===============*/
function logoMovement() {
    window.addEventListener('scroll', function() {
        var logo = document.querySelector('.nav__logo img');
        if (logo) {
            if (window.scrollY > 10) { 
                logo.classList.add('small');
            } else {
                logo.classList.remove('small');
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', logoMovement);

/*=============== COMMON SCROLL FUNCTION ===============*/
function scrollContent(wrapperSelector, gallerySelector, itemSelector, nextBtnSelector = null, prevBtnSelector = null, itemsPerPageDesktop = 3, itemsPerPageMobile = 1, scrollInterval = 5000) {
    const wrapper = document.querySelector(wrapperSelector);
    const gallery = document.querySelector(gallerySelector);
    const items = gallery.querySelectorAll(itemSelector);
    let currentIndex = 0;
    let autoScroll;
    let startX = 0;
    let endX = 0;

    function getItemsPerPage() {
        return window.innerWidth <= 991 ? itemsPerPageMobile : itemsPerPageDesktop;
    }

    function updateGallery() {
        const width = wrapper.clientWidth / getItemsPerPage();
        gallery.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    function scrollGallery() {
        const itemsPerPage = getItemsPerPage();
        currentIndex = (currentIndex + 1) % (items.length - itemsPerPage + 1);
        updateGallery();
    }

    function resetAutoScroll() {
        clearInterval(autoScroll);
        autoScroll = setInterval(scrollGallery, scrollInterval);
    }

    // Inicializa el auto-scroll
    autoScroll = setInterval(scrollGallery, scrollInterval);

    // Llama a updateGallery para la primera posición
    updateGallery();

    // Maneja el redimensionamiento de la ventana
    window.addEventListener('resize', updateGallery);

    // Añade eventos a los botones si están presentes
    if (nextBtnSelector && prevBtnSelector) {
        const nextBtn = document.querySelector(nextBtnSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        nextBtn.addEventListener('click', () => {
            const itemsPerPage = getItemsPerPage();
            currentIndex = (currentIndex + 1) % (items.length - itemsPerPage + 1);
            updateGallery();
            resetAutoScroll();
        });
        prevBtn.addEventListener('click', () => {
            const itemsPerPage = getItemsPerPage();
            currentIndex = (currentIndex - 1 + items.length - itemsPerPage + 1) % (items.length - itemsPerPage + 1);
            updateGallery();
            resetAutoScroll();
        });
    }

    // Añade eventos a los botones numerados
    const newsButtons = document.querySelectorAll('.news-button');
    newsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemsPerPage = getItemsPerPage();
            currentIndex = Math.min(parseInt(button.getAttribute('data-index')), items.length - itemsPerPage);
            updateGallery();
            resetAutoScroll();
        });
    });

    // Añade eventos de deslizamiento con el dedo
    wrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    wrapper.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    wrapper.addEventListener('touchend', () => {
        const itemsPerPage = getItemsPerPage();
        if (startX > endX + 50) {
            // Deslizar hacia la izquierda
            currentIndex = (currentIndex + 1) % (items.length - itemsPerPage + 1);
        } else if (startX < endX - 50) {
            // Deslizar hacia la derecha
            currentIndex = (currentIndex - 1 + items.length - itemsPerPage + 1) % (items.length - itemsPerPage + 1);
        }
        updateGallery();
        resetAutoScroll();
    });

    const videos = gallery.querySelectorAll('video, iframe.news-video');
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            clearInterval(autoScroll);
        });
        video.addEventListener('mouseleave', () => {
            resetAutoScroll();
        });
    });
}

// Invoca la función para la galería de imágenes con flechas
document.addEventListener('DOMContentLoaded', () => {
    scrollContent('.gallery-wrapper', '.gallery', 'img', '.next', '.prev', 1, 1, 4000);
});

// Invoca la función para la galería de noticias con flechas
document.addEventListener('DOMContentLoaded', () => {
    scrollContent('.news-wrapper', '.news-gallery', '.news-item', '.next-news', '.prev-news', 3, 1, 10000);
});

/*=============== MAP FUNCTION ===============*/
function inicializarMapa() {
    var map = L.map('map', { 
        scrollWheelZoom: false,
        dragging: false,
        }).setView([7.7024, -72.3605], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([7.7024, -72.3605]).addTo(map)
        .bindPopup('Alcaldia del Municipio Junín')
        .openPopup();
}

/*Botones de pag trámites*/
function toggleDetail(button) {
    var detail = button.nextElementSibling;
    var listItem = button.parentElement;

    if (listItem.classList.contains('open')) {
        listItem.classList.remove('open');
        button.textContent = "Ver más";
    } else {
        listItem.classList.add('open');
        button.textContent = "Ver menos";
    }
}

/*centrar nota de prensa*/
window.addEventListener("load", function() {
    var hash = window.location.hash;
    if (hash) {
        var target = document.querySelector(hash);
        if (target) {
            var targetRect = target.getBoundingClientRect();
            var scrollPosition = targetRect.top + window.pageYOffset - ((window.innerHeight - targetRect.height) / 2);

            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        }
    }
});

/*información detallada de departamentos*/
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.departamentos-li');
    const overlay = document.getElementById('overlay');
    let lastScrollPosition = 0;

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Store the current scroll position
            lastScrollPosition = window.scrollY;

            // Show overlay
            overlay.style.display = 'block';

            // Expand the clicked item
            item.classList.add('expanded');

            // Add a close button if not already present
            if (!item.querySelector('.close-button')) {
                const closeButton = document.createElement('button');
                closeButton.textContent = '✖';
                closeButton.classList.add('close-button');
                item.appendChild(closeButton);

                // Handle the close button click
                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering the item click again
                    item.classList.remove('expanded');
                    closeButton.remove();
                    const info = item.querySelector('.info-ext');
                    if (info) {
                        info.style.display = 'none'; // Ocultar nuevamente
                    }

                    // Hide overlay
                    overlay.style.display = 'none';

                    // Restore the previous scroll position
                    window.scrollTo({
                        top: lastScrollPosition,
                        behavior: 'smooth'
                    });
                });
            }

            // Show detailed info
            const info = item.querySelector('.info-ext');
            if (info) {
                info.style.display = 'block';

                // Scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});


