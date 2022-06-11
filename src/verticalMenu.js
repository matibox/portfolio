export default function verticalMenu() {
    const links = document.querySelectorAll('[data-vertical-link]');
    const sections = document.querySelectorAll('[data-section]');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                let index = entry.target.elems_index;
                const activeClass = 'vertical-nav__link--active';

                links[index].classList.toggle(
                    activeClass,
                    entry.isIntersecting
                );
            });
        },
        { rootMargin: '-330px', threshold: 0.043 }
    );

    sections.forEach((section, index) => {
        section.elems_index = index;
        observer.observe(section);
    });
}
