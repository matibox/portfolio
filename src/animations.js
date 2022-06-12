import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function setAnimations() {
    // ==== HERO ====
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

    // ==== ABOUT ====
    // Text
    gsap.from('.about__heading, .about__text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top center',
        },
        duration: 1,
        opacity: 0,
        x: -100,
        stagger: 0.5,
        ease: 'power3',
    });

    // Photo
    gsap.from('.about__photo-container', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top center',
        },
        duration: 1,
        opacity: 0,
        x: 100,
        delay: 1.5,
        ease: 'power3',
    });

    // ==== SKILLS ====
    // Text
    gsap.from('.skills__heading, .skills__text-container', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top center',
        },
        duration: 1,
        opacity: 0,
        x: -100,
        stagger: 0.5,
        ease: 'power3',
    });

    // Sliders text
    gsap.from('.slider__language, .slider__scale', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top center',
        },
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.25,
        ease: 'power3',
    });

    // Sliders
    gsap.from('.slider__graph-container', {
        scrollTrigger: {
            trigger: '.skills__heading',
            start: 'top center',
        },
        duration: 2,
        width: 0,
        stagger: 0.5,
        ease: 'power3',
        delay: 1,
    });

    // ==== PROJECTS ====
    // Project titles
    const projectTitles = gsap.utils.toArray('.project__title');
    projectTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top-=150 center',
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3',
        });
    });

    // Project images
    const projectImages = gsap.utils.toArray('.project__image');
    projectImages.forEach(image => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top-=150 center',
            },
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3',
        });
    });

    // Project captions
    const projectCaptions = gsap.utils.toArray('.project__image-caption');
    projectCaptions.forEach(caption => {
        gsap.from(caption, {
            scrollTrigger: {
                trigger: caption,
                start: 'top-=400 center',
            },
            yPercent: 100,
            opacity: 0,
            duration: 1,
            delay: 1.5,
            ease: 'power3',
        });
    });

    // Project descriptions
    const projectDescriptions = gsap.utils.toArray('.project__description');
    projectDescriptions.forEach(description => {
        gsap.from(description, {
            scrollTrigger: {
                trigger: description,
                start: 'top-=150 center',
            },
            x: 100,
            opacity: 0,
            delay: 1.5,
            ease: 'back',
            duration: 1,
        });
    });

    const projectIcons = gsap.utils.toArray('.project__github');
    projectIcons.forEach(icon => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top-=400 center',
                markers: true,
            },
            opacity: 0,
            yPercent: 100,
            delay: 2,
            druation: 1,
        });
    });
}
