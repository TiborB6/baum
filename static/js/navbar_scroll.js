let lastScrollTop = 0; // Variable to keep track of the last scroll position
const navbar = document.querySelector('.navbar'); // Get the navbar element

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

    if (currentScroll > lastScrollTop) {
        // If scrolling down
        navbar.classList.add('hidden'); // Hide navbar
    } else {
        // If scrolling up
        navbar.classList.remove('hidden'); // Show navbar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
