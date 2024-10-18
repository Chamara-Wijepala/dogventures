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
