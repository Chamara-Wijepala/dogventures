const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const mobileNav = document.getElementById('mobile-nav');
const imageSlider = document.getElementById('image-slider');
const accordionPanels = document.querySelectorAll('.accordion-panel');
const contactForm = document.getElementById('contact-form');

let isDragging = false;
let startX, startScrollLeft;

function toggleMobileNav() {
	mobileNav.classList.toggle('translate-x-full');
	mobileNav.classList.toggle('translate-x-0');
	// duration-0 was applied to prevent mobile nav from sliding offscreen at start
	mobileNav.classList.remove('duration-0');
}

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

function toggleAccordionPanel(panelButton, panelBody) {
	panelButton.firstElementChild.classList.toggle('hidden');
	panelButton.lastElementChild.classList.toggle('hidden');

	panelBody.classList.toggle('grid-rows-[0fr]');
	panelBody.classList.toggle('grid-rows-[1fr]');
}

openNavBtn.addEventListener('click', toggleMobileNav);
closeNavBtn.addEventListener('click', toggleMobileNav);

imageSlider.addEventListener('mousemove', dragSlider);
imageSlider.addEventListener('mousedown', dragStart);
imageSlider.addEventListener('mouseup', dragStop);

accordionPanels.forEach((panel) => {
	const panelButton = panel.children[1];
	const panelBody = panel.children[2];

	panelButton.addEventListener('click', () =>
		toggleAccordionPanel(panelButton, panelBody)
	);
});

contactForm.addEventListener('submit', (e) => e.preventDefault());
