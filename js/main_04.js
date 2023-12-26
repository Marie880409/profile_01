
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click',()=> {
    navMenu.classList.toggle('open');
})

const navMenu = document.querySelector('.header_menu');

navMenu.addEventListener('click',()=>{
    navMenu.classList.remove('open');
})

const box_some=document.querySelector("#skills");
const someHeight = box_some.offsetHeight;
const skill_content = document.querySelector(".skills_content");

document.addEventListener('scroll', function() {

    if(window.scrollY > someHeight / 2) {
        skill_content.style.marginTop= "0px";
        skill_content.style.opacity= 1;
    } else {
        skill_content.style.marginTop= "-300px";
        skill_content.style.opacity= 0.1;
    }

    }
)