/*=============== MENU COMPONENT ===============*/
class MenuComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header" id="header">
            <nav class="nav container">
                <a href="../index.html" class="nav__logo">
                    <img src="../img/logo.png" alt="Logo">
                </a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="../index.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Inicio</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./departamentos.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Departamentos</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./tramites.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Trámites</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./municipio.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Municipio</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./eventos.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Eventos</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="./actualidad.html" class="nav__link">
                                <i class="ri-arrow-right-up-line"></i>
                                <span>Actualidad</span>
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
    }
}
customElements.define('menu-component', MenuComponent);