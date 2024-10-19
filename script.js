/*
Mobile navigation
*/
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const mobileNav = document.getElementById('mobile-nav');

function toggleMobileNav() {
	mobileNav.classList.toggle('translate-x-full');
	mobileNav.classList.toggle('translate-x-0');
	// duration-0 was applied to prevent mobile nav from sliding offscreen at start
	mobileNav.classList.remove('duration-0');
}

openNavBtn.addEventListener('click', toggleMobileNav);
closeNavBtn.addEventListener('click', toggleMobileNav);

/*
Image slider
*/
const imageSlider = document.getElementById('image-slider');

let isDragging = false;
let startX, startScrollLeft;

function dragSlider(e) {
	if (!isDragging) return;

	imageSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

function dragStart(e) {
	isDragging = true;
	startX = e.pageX;
	startScrollLeft = imageSlider.scrollLeft;

	imageSlider.classList.add('cursor-grabbing');
	imageSlider.classList.add('select-none');
}

function dragStop() {
	isDragging = false;

	imageSlider.classList.remove('cursor-grabbing');
	imageSlider.classList.remove('select-none');
}

imageSlider.addEventListener('mousemove', dragSlider);
imageSlider.addEventListener('mousedown', dragStart);
imageSlider.addEventListener('mouseup', dragStop);

/*
Accordion
*/
const accordionPanels = document.querySelectorAll('.accordion-panel');

function toggleAccordionPanel(panelButton, panelBody) {
	panelButton.firstElementChild.classList.toggle('hidden');
	panelButton.lastElementChild.classList.toggle('hidden');

	panelBody.classList.toggle('grid-rows-[0fr]');
	panelBody.classList.toggle('grid-rows-[1fr]');
}

accordionPanels.forEach((panel) => {
	const panelButton = panel.children[1];
	const panelBody = panel.children[2];

	panelButton.addEventListener('click', () =>
		toggleAccordionPanel(panelButton, panelBody)
	);
});

/*
Contact form
*/
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => e.preventDefault());
