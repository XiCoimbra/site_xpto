/* const updateWindowSize = () => {
	const windowElement = document.querySelector('#window-size');
	windowElement.textContent = `Tamanho da janela: ${window.innerWidth} x ${window.innerHeight}`;
};

window.addEventListener('resize', updateWindowSize); */

/* Navbar change color on scroll */
window.addEventListener('scroll', event => {
	if (window.scrollY >= 60) {
		document.querySelector('.navbar').classList.add('active');
	} else {
		document.querySelector('.navbar').classList.remove('active');
	}
});

/* Menu Mobile */
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

links.forEach(link =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
	}),
);
