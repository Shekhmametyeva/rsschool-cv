'use strict'

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('.body');
const wraperDark = document.querySelector('.wraper-dark');
let isMenuOpen = false;

hamburger.addEventListener('click', toggleMenu);
wraperDark.addEventListener('click', removeMenu);
navList.addEventListener('click', removeMenu);

function toggleMenu (event) {
    isMenuOpen = !isMenuOpen;
    nav.classList.toggle('nav_open');
    hamburger.classList.toggle('hamburger_open')
    body.classList.toggle('hidden');
    wraperDark.classList.toggle('wraper-dark_open');
}
function removeMenu (event) {
    if (!isMenuOpen) { return }
    if (event.target.className === 'link' || event.target === wraperDark) { toggleMenu () }
     
}