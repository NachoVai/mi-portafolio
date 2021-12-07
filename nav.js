document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

// SCROLL REVEAL

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.aboutme', {delay: 500});
ScrollReveal().reveal('.cards', {delay: 500});
ScrollReveal().reveal('.cards-banner', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});