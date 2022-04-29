var typed = document.querySelector(".auto-input");
typed = new Typed(".auto-type",{
    strings: ["Full stack Devloper","React Js Developer","Freelancer"],
    typeSpeed: 200,
    backspeed: 200,
    loop: true
});


const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav-toggle', 'nav-menu')

// active