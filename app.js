document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Typing Animation
    const typed = new Typed('.typing', {
        strings: ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed('.typing-2', {
        strings: ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});
