export function heroSectionAction() {
const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const slideDuration = 3000; 

    function nextSlide() {
        if (slides.length === 0) return;
        
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

let slideInterval = setInterval(nextSlide, slideDuration);
const nav = document.getElementById('mainNav');

    window.addEventListener('scroll', () => {
        if (!nav) return;

        const heroSection = document.getElementById('heroSection') || document.querySelector('.hero-section-container');
        const isDarkMode = document.body.classList.contains('dark-theme');

        let triggerOffset = 50; 
        if (heroSection) {
            triggerOffset = heroSection.offsetHeight - 80;
        }

        if (window.scrollY >= triggerOffset) {
            nav.classList.add('sticky');

            if (isDarkMode) {
                nav.classList.add('sticky-dark');
            } else {
                nav.classList.remove('sticky-dark');
            }
        } else {
            nav.classList.remove('sticky', 'sticky-dark');
        }
    });
}