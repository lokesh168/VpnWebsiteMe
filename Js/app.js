const hamburgerMenu = document.querySelector(".icon-hamburger");
const navigationMenu = document.querySelector(".primary-navigation");

const mobileMenu = document.getElementById("primary-navigation-menu");

hamburgerMenu.addEventListener("click", () => {
    console.log("Clicked classes");
    // navigationMenu.classList.toggle("primary-navigation");

    mobileMenu.classList.toggle("visibility-hidden");
});
