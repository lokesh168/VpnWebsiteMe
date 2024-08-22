const hamburgerMenu = document.querySelector(".icon-hamburger");
const navigationMenu = document.querySelector(".primary-navigation");
const mobileMenu = document.getElementById("primary-navigation-menu");

hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("visibility-hidden");
});
