// Header Scroll Effect
let nav = document.querySelector(".header");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Navbar hide on link click
let navLinks = document.querySelectorAll(".nav-link"); // Correct selector
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLinks.forEach(function (navLink) { // Declare navLink here
    navLink.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});