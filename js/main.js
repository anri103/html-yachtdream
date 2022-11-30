window.addEventListener('DOMContentLoaded', event => {

	// Sticky Header
	window.addEventListener('scroll', function () {
		if (window.scrollY > 150) {
			document.getElementById('nav-scroll').classList.add('nav-fixed');
		} else {
			document.getElementById('nav-scroll').classList.remove('nav-fixed');
		}
	});

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbar-toggle-nav-center .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});

	// Swiper
	const thumdsSwiper = new Swiper('.thumdsSwiper', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});

	// Swiper
	const swiper1 = new Swiper('.about-slider', {
		loop: false,
		slidesPerView: 1,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.about-slider-next',
			prevEl: '.about-slider-prev',
		},
		thumbs: {
			swiper: thumdsSwiper,
		},
	});

	// GLightbox
	const lightboxGallery1 = GLightbox({
		selector: '.gallery-1'
	});

	// BS Tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});

});