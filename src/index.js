// Font awesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Styles
import './styles/main.scss';

// Animations
import setAnimations from './animations';
setAnimations();

// Assets
import assets from './assets';
assets();

// Mobile menu
const button = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-mobile-menu]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const navbar = document.querySelector('[data-navbar]');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('header-top__mobile-menu--active');
        button.classList.remove('header-top__burger--active');
    });
});

button.addEventListener('click', () => {
    menu.classList.toggle('header-top__mobile-menu--active');
    button.classList.toggle('header-top__burger--active');
});

window.addEventListener('scroll', stickyNavbar);
window.addEventListener('load', stickyNavbar);

function stickyNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('header-top--scroll');
    } else {
        navbar.classList.remove('header-top--scroll');
    }
}

// Graphs
const graphs = document.querySelectorAll('[data-graph]');

function setGraphWidth() {
    graphs.forEach(graph => {
        const width = graph.getAttribute('data-width');
        graph.style.setProperty('--graph-width', `${width}%`);

        if (width === '100') {
            graph.classList.add('slider__graph--max');
        } else {
            graph.classList.remove('slider__graph--max');
        }
    });
}

setGraphWidth();
