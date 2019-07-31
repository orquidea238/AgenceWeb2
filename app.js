// --------------------Dark and light mode------------------------------------
let on = 0;

$(document).ready(function(){
    $('#mode').click(() => {
        on == 0 ? on = 1 : on = 0;
        tog();
    })
})

function tog(){
    on == 1 ? localStorage.setItem('modeItem', on) : localStorage.clear();
    $('#mode').toggleClass('active')
    $('main').toggleClass('dark')
    $('#testimonials').toggleClass('dark')
    $('#services').toggleClass('dark')
    $('#prestation').toggleClass('dark')
    $('.swiper-container').toggleClass('dark')
}

if(localStorage.getItem('modeItem') != undefined){
    on = localStorage.getItem('modeItem');
    tog();
}
// -------------------------------Accordeon------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("ouvre");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ------------------------ScrollMagic-------------------------------------------------
var controller = new ScrollMagic.Controller();
var elements = document.getElementsByClassName('scroll');

for(var i = 0; i < elements.length; i++){
new ScrollMagic.Scene({
    triggerElement: elements[i],
    offset: 50,
    triggerHook: 0.9,
})

.setClassToggle(elements[i], "visible")
.addTo(controller);
}

// Typing-----------------------------------------------
const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Bonjour", "Bienvenue dans notre agence web", "n'hésitez pas à nous envoyer un message", "à bientôt:)"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingDelay + 250);
});

/* --------------------------responsive navbar------------------------------------------ */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// -----------------------  Initialize Swiper --------------------
var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});

