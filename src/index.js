// Font awesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Styles
import './styles/main.scss';

// Animations
import setAnimations from './animations';
import { animateNewProjects } from './animations';
setAnimations();

// Assets
import assets from './assets';
assets();

// Projects
import projects from './projects.json';
const container = document.querySelector('[data-projects-container]');
const loadMore = document.querySelector('[data-load-more]');
let number = 0;
let loaded = 0;

function loadMoreProjects(amount) {
    if (number > amount) return;
    for (let i = number; i < amount; i++) {
        const project = projects[i];
        if (project === undefined) return;
        const projectEl = document.createElement('div');
        projectEl.classList.add('project', 'project--loaded');
        projectEl.innerHTML = `
            <div class="project__info">
                <div class="project__title-container">
                    <h2 class="project__title">
                        <a href="${project.link}">${project.title}</a>
                    </h2>
                    <a class="project__github" target="_blank" href="${project.github}" aria-label="github">
                        <i class="fa-brands fa-github project__link-img"></i>
                    </a>
                </div>
                <figure class="project__image-container">
                    <img data-${project.imgDatasetName} alt="${project.title}" class="project__image">
                    <figcaption class="project__image-caption">
                        ${project.languages}
                    </figcaption>
                </figure>
            </div>
            <p class="project__description">
                ${project.description}
            </p>
        `;

        container.appendChild(projectEl);
        number++;
    }
}

loadMore.addEventListener('click', () => {
    loadMoreProjects(projects.length);
    assets();
    animateNewProjects(loaded);
    loaded += projects.length;
});

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

// Footer date
const footer = document.querySelector('[data-footer-text]');

function setFooterDate() {
    const date = new Date();
    const year = date.getFullYear();
    footer.innerHTML += ` ${year}`;
}

setFooterDate();
