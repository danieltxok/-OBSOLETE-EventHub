// show nav-menu
const body = document.getElementById("body");
//const header = document.getElementById("header");
const navmenu = document.getElementById("nav-menu");
let nav_display = "false";
const hamburger = document.querySelector('.header-hamburger');
// const main = document.getElementById("main");
// const footer = document.getElementById("footer");

function showNavmenu() {
    nav_display = "true";
    navmenu.style.display = "inline-block";
    body.style.overflow = "hidden";
}

function hideNavmenu() {
    nav_display = "false"
    navmenu.style.display = "none";
    body.style.overflow = "auto";
}

// addEventListener click
hamburger.addEventListener('click', showNavmenu);

// to detect swipe when the menu 
// https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
let xDown = null;
let yDown = null;
let xUp = null;
let yUp = null;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }
    xUp = evt.touches[0].clientX;
    yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0 & nav_display === 'true') {
            /* left swipe */
            hideNavmenu();
        } else {
            /* right swipe */
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}