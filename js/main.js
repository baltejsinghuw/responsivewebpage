// Responsive Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close the navigation menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
