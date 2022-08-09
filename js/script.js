// this code is inpsired by w3schools : https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
const header = document.querySelector("header")
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > "120") {
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    }
    prevScrollpos = currentScrollPos;
}

// scroll disable code made by geeksforfeeks.org (https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/)
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

function makeHeader() {
    header.innerHTML = `
    <div class="navbar">
        <a href="index.html" class="logo-wrapper">
            <img class="logo" src="assets/icons/logoCSMfull.svg" alt="the logo of Community Science Museum, CSM">
        </a>
        <div class="searchbar-wrapper">
            <form class="searchbar">
                <input class="search-input" type="search">
                <div class="search-btn">
                    <i class="fa fa-search"></i>
                </div>
            </form>
            
        </div>
        <div class="menu">
            <div class="hamburger-bar">
                <span class="bar bar--1"></span>
                <span class="bar bar--2"></span>
                <span class="bar bar--3"></span>
                <span class="bar bar--4"></span>
            </div>
            <!-- <label class="menu__icon" for="hamburger-menu"><img src="assets/icons/icon__menu.svg" alt="icon of three bars"></label>
                <input type="checkbox" id="hamburger-menu"> -->
                
        </div>
    </div>
    <nav id="primary-nav" data-visible="false">
        <ul>
            <li class="active-li"><a href="index.html">Home</a></li>
            <li>
                <span id="exhibition-label">Exhibitions +</span>
                <ul class="exhibitions__list">
                    <li class="li__cosmology"><a href="exhibition-cosmology.html"><img src="assets/icons/icon__cosmology.svg" alt=""> Cosmology</a></li>
                    <li class="li__ecology"><a href="exhibition-ecology.html"><img src="assets/icons/icon__ecology.svg" alt="icon of a leaf">Ecology</a></li>
                    <li class="li__microbiology"><a href="exhibition-microbiology.html"><img src="assets/icons/icon__microbiology.svg" alt="icon of a bacteria">Microbiology</a></li>
                    <li class="li__paleontology"><a href="exhibition-paleontology.html"><img src="assets/icons/icon__bone.svg" alt="icon of a bone">Paleontology</a></li>
                    <li class="li__vr"><a href="exhibition-vr.html"><img src="assets/icons/icon__vr.svg" alt="icon of vr-goggles">VR</a></li>
                    <li class="li__physics"><a href="exhibition-physics.html"><img src="assets/icons/icon__physics.svg" alt="icon of an atom">Physics</a></li>
                </ul>
            </li>
            <li><a href="events.html">Events</a></li>
            <li><a href="aboutus.html">About CSM</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    `
}
makeHeader();






const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("display");
});


// open nav

const navMenuBtn = document.querySelector(".menu");
const menuBars = document.querySelectorAll(".bar");
const navMenu = document.querySelector("#primary-nav");
const body = document.querySelector("body");
// const header = document.querySelector("header");

navMenuBtn.addEventListener("click", () => {
    const navIsVisible = navMenu.getAttribute("data-visible");
    navMenu.classList.add("animate-nav");

    menuBars.forEach(bar => {
        bar.classList.toggle("close");
    });

    if(navIsVisible === "false") {
        navMenu.setAttribute("data-visible", true);
        navMenu.setAttribute("aria-expanded", true);

        disableScroll();

    } else {
        navMenu.setAttribute("data-visible", false);
        navMenu.setAttribute("aria-expanded", false);

        enableScroll();

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

// open collapsibles 
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(item => {
    item.addEventListener("click", event => {
        item.classList.toggle("collapsible");
        item.classList.toggle("collapsible-visible");
    })
})