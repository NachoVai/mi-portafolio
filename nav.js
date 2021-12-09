/* RESPONSIVE MENU */
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

/* UP BUTTON */
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});