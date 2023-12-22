
'use strict';

const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
})