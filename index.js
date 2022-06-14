'use strict'

// бургер-меню
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

// анимация прогресса
const skills = document.querySelector('.skills__item');
const progress = document.querySelectorAll('.skills__progress');
window.addEventListener('scroll', animateProgressBar);


function animateProgressBar () {
   if (skills.getBoundingClientRect().top < document.documentElement.clientHeight - skills.clientHeight) {
       progress.forEach(el => el.classList.add('progress_active'));
       window.removeEventListener('scroll', animateProgressBar);
   }

}