/*=============== MENU COMPONENT ===============*/
class MenuComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header" id="header">
            <nav class="nav container">
                <a href="./index.html" class="nav__logo">
                    <img src="./img/logo.png" alt="Logo">
                </a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="./index.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Inicio</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./pages/departamentos.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Departamentos</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./pages/tramites.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Trámites</span>
                            </a>
                        </li>
                        <li class="nav__item nav__item--submenu" id="municipio-item">
                            <p class="nav__link">
                                <i class="ri-arrow-down-s-line"></i>
                                <span>Municipio</span>
                            </p>
                            <ul class="nav__submenu">
                                <li class="nav__submenu-item">
                                    <a href="./pages/municipio.html" class="nav__submenu-link">
                                        <span><i class="ri-arrow-right-up-line"></i>Municipio</span>
                                    </a>
                                </li>
                                <li class="nav__submenu-item">
                                    <a href="./pages/campains.html" class="nav__submenu-link">
                                        <span><i class="ri-arrow-right-up-line"></i>Campañas</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav__item">
                            <a href="./pages/eventos.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Eventos</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./pages/actualidad.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Actualidad</span>
                            </a>
                        </li>
                         <li class="nav__item">
                            <a href="./pages/revista.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Revistas</span>
                            </a>
                        </li>
                    </ul>
                    <!-- Close button -->
                    <div class="nav__close" id="nav-close">
                        <i class="ri-close-large-line"></i>
                    </div>
                    <div class="nav__social">
                        <a href="https://www.instagram.com/juninnosune?igsh=MTE5YXowNmlsaTgybw==" target="_blank" class="nav__social-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="https://www.facebook.com/alcjunin?sfnsn=wa&mibextid=RUbZ1f" target="_blank" class="nav__social-link">
                            <i class="ri-facebook-circle-line"></i>
                        </a>
                        <a href="https://x.com/juninnosunetw?t=uoCiCrvneITxKFT1DzuaIg&s=08" target="_blank" class="nav__social-link">
                            <i class="ri-twitter-x-line"></i>
                        </a>
                    </div>
                </div>
                <!-- Toggle button -->
                <div class="nav__toggle" id="nav-toggle">
                    <i class="ri-menu-line"></i>
                </div>
            </nav>
        </header>
        `;

        // JavaScript para manejar el evento de clic
        const municipioItem = this.querySelector('#municipio-item');
        municipioItem.addEventListener('click', function() {
            this.classList.toggle('open');
            this.classList.toggle('active');
        });
    }
}
customElements.define('menu-component', MenuComponent);