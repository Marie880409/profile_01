
const home=document.querySelector('.home_container');
const homeHeight=home.offsetHeight;

document.addEventListener('scroll',()=> {

    home.style.opacity= 1-(window.scrollY / homeHeight);
    
})

const testimonial_img=document.querySelector(".testimonial_img")
const testimonial_bubble=document.querySelector(".testimonial_bubble")

testimonial_img.addEventListener("click",function() {
testimonial_bubble.style.color="#f00"

})