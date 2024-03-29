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

    // Mobile burger
    gsap.from('.header-top__burger', {
        duration: 1,
        opacity: 0,
        x: 100,
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
    // Projects heading
    gsap.from('.projects__heading', {
        scrollTrigger: {
            trigger: '.projects__heading',
            start: 'top-=250 center',
        },
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3',
    });

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
                start: 'top-=200 center',
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
            delay: 0.5,
            ease: 'back',
            duration: 1,
        });
    });

    // Projects icons
    const projectIcons = gsap.utils.toArray('.project__github');
    projectIcons.forEach(icon => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top-=400 center',
            },
            opacity: 0,
            yPercent: 100,
            delay: 1,
            druation: 1,
        });
    });

    // Show more button
    gsap.from('.projects__load-more', {
        scrollTrigger: {
            trigger: '.projects__load-more',
            start: 'top-=350 center',
        },
        markers: true,
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3',
    });

    // ==== CONTACT ====
    gsap.from('.contact__heading, .contact__paragraph, .contact__button', {
        scrollTrigger: {
            trigger: '.project__transition-dark',
            start: 'top center',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    });

    // ==== FOOTER ====
    gsap.from('.footer__text', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top center',
        },
        opacity: 0,
        duration: 1,
        delay: 2,
    });

    gsap.from('.footer__socials-container > a', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top center',
        },
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 3,
        stagger: 0.5,
    });
}

export function animateNewProjects(index) {
    const loadedProjects = gsap.utils.toArray('.project--loaded');
    const newProjects = loadedProjects.slice(index);
    gsap.from(newProjects, {
        opacity: 0,
        y: 200,
        duration: 1,
        stagger: 1.5,
    });
}
