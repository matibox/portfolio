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

button.addEventListener('click', () => {
    menu.classList.toggle('header-top__mobile-menu--active');
    button.classList.toggle('header-top__burger--active');
});
