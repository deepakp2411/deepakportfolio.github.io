// var typed = document.querySelector(".auto-input");
// typed = new Typed(".auto-type",{
//     strings: ["Full stack Devloper","React Js Developer","Freelancer"],
//     typeSpeed: 200,
//     backspeed: 200,
//     loop: true
// });
console.log("hello");

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


//  Scroll 
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const section = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= section + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }

    })
}