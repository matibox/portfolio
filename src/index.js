// Animations
import setAnimations from './animations';
setAnimations();

// Styles
import './styles/main.scss';

// Assets
import Logo from './assets/Logo.svg';

const logo = document.querySelector('[data-logo]');
logo.src = Logo;
