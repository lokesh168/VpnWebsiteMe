const hamburgerMenu = document.querySelector(".icon-hamburger");
const navigationMenu = document.querySelector(".primary-navigation");
const mobileMenu = document.getElementById("primary-navigation-menu");

hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("visibility-hidden");
});

const el = document.querySelector(".blaze-slider");
new BlazeSlider(el, {
    all: {
        slidesToShow: 3,
        slideGap: "10px",
    },
    "(max-width: 900px)": {
        slidesToShow: 1,
    },
    "(max-width: 500px)": {
        loop: true,
    },
});
