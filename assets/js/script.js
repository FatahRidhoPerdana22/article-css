window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const header = document.querySelector("header");
    const headerBottom = header.offsetTop + header.offsetHeight;

    if (window.pageYOffset >= headerBottom) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    const navbarUl = document.getElementById("navbarUl");
    const menuToggle = document.getElementById("menu-toggle");

    navbarUl.classList.toggle("active");

    if (navbarUl.classList.contains("active")) {
        menuToggle.style.display = "none"; 
    } else {
        menuToggle.style.display = "block"; 
    }
});

document.getElementById("close-btn").addEventListener("click", function() {
    const navbarUl = document.getElementById("navbarUl");
    const menuToggle = document.getElementById("menu-toggle");

    navbarUl.classList.remove("active"); 
    menuToggle.style.display = "block"; 
});
