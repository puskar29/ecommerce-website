let hamburger = document.querySelector("#hamburger");
let mobileNav = document.querySelector("#mobile-nav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("-translate-x-full");
});