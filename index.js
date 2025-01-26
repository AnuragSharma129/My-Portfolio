// navbar section ====

const mobile_nav = document.querySelector(".navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}; 

mobile_nav.addEventListener("click" , () => toggleNavbar());


// scroll animation section ======


window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0;i < reveals.length;i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


const skillSection = document.getElementById('skill-section');

const progressBars = document.querySelectorAll('.progress-bar');

function showprogress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideprogress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll',() => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos){
        showprogress();
    }
    else{
        hideprogress();
    }
});



// ==========  
// TYPING ANIMATION CODE--
//  ==========

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Full Stack Developer'],
    typeSpeed: 50,
    loop:true
  });



//  GO TO TOP BUTTON CODE====

const goToTop = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 350){
        goToTop.classList.add('active2');
    }
    else{
        goToTop.classList.remove('active2');
    }
});




// ==========
// FORM-VALIDATION
// ==========

function validateForm(){
    let name = document.forms["myForm"]["fname"].value;
    if(fname == ""){
        alert ('name must be filled out');
        return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if(email =- ""){
        alert ('email must be filled out');
        return false;
    }

    let subject = document.forms["myForm"]["subject"].value;
    if(subject == ""){
        alert ('subject must be filled out');
        return false;
    }

    let message = document.forms["myForm"]["message"].value;
    if(message == ""){
        alert ('message must be filled out');
        return false;
    }
}







