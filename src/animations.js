import { gsap } from 'gsap';

export default function setAnimations() {
    // Top nav
    gsap.from('.header-top__list-item', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.25,
        ease: 'power3',
    });

    // Vertical nav
    gsap.from('.vertical-nav__link', {
        duration: 1,
        opacity: 0,
        x: 100,
        stagger: 0.25,
        ease: 'power3',
        delay: 1.5,
    });

    // Logo
    gsap.from('.header-top__logo-wrapper', {
        duration: 1,
        opacity: 0,
        y: 75,
        ease: 'back',
        delay: 0.5,
    });

    // Hero h2
    gsap.from('.hero__intro, .hero__info, .hero__paragraph', {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: 'power3',
        delay: 2,
        stagger: 0.75,
    });

    // Hero h1
    gsap.from('.hero__name', {
        duration: 1,
        opacity: 0,
        x: 100,
        ease: 'back',
        delay: 2.5,
    });

    // Hero button
    gsap.from('.hero__button', {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 4,
        ease: 'power3',
    });
}
