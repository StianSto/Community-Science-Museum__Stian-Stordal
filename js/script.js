const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("display")
});




// open nav

const navMenuBtn = document.querySelector(".menu");
const menuBars = document.querySelectorAll(".bar");
const navMenu = document.querySelector("#primary-nav");
// const header = document.querySelector("header");

navMenuBtn.addEventListener("click", () => {
    const navIsVisible = navMenu.getAttribute("data-visible");
    navMenu.classList.add("animate-nav")

    menuBars.forEach(bar => {
        bar.classList.toggle("close")
    });

    if(navIsVisible === "false") {
        navMenu.setAttribute("data-visible", true);
        navMenu.setAttribute("aria-expanded", true);
    } else {
        navMenu.setAttribute("data-visible", false);
        navMenu.setAttribute("aria-expanded", false);
    }

    navMenu.addEventListener('transitionend', () => {
        navMenu.classList.remove("animate-nav");
    })
});

// open exhibitions
const exhibitionsLabel = document.querySelector("#exhibition-label");
const exhibitionsList = document.querySelector(".exhibitions__list");

exhibitionsLabel.addEventListener("click", () => {
    exhibitionsList.classList.toggle("display-block");
})

