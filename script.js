/* Header */
document.querySelector('#nav').addEventListener('click', change_color);
function change_color(event) {
    document.querySelectorAll('.header__nav').forEach( element => {
        element.classList.remove('active');
    });

    if (event.target.tagName === "A") {
        event.target.parentElement.classList.add('active'); 
    }
}

    const menuBlock = document.querySelectorAll('#header__navigation li');
    const navbar = document.querySelector('.navbar')
    const serviceBlock = document.getElementById('services');
    const portfolioBlock = document.getElementById('portfolio');
    const aboutBlock = document.getElementById('about');
    const contactBlock = document.getElementById('contact');
    const headerHeight = document.getElementById('header').offsetHeight;
  
    document.getElementById('header__navigation').addEventListener('click', () => {
      navbar.classList.add('invisible');
      SecondSandwichBtn.classList.add('invisible');
      singolo.classList.remove('sandwich-singolo');
      firstSandwichBtn.classList.remove('invisible');
      blur.classList.remove('blur')
      menuBlock.forEach(element => element.classList.remove('active'));
      event.target.classList.add('active');
      
    });
  
    window.addEventListener('scroll', () => {
      if (window.scrollY < serviceBlock.offsetTop - headerHeight) {
        menuBlock.forEach(element => element.classList.remove('active'));
        document.querySelector('.header__home').classList.add('active');
      };
  
      if (window.scrollY >= serviceBlock.offsetTop - headerHeight
        && window.scrollY < portfolioBlock.offsetTop - headerHeight) {
        menuBlock.forEach(element => element.classList.remove('active'));
        document.querySelector('.header__services').classList.add('active');
      };
  
      if (window.scrollY >= portfolioBlock.offsetTop - headerHeight
        && window.scrollY < aboutBlock.offsetTop - headerHeight) {
        menuBlock.forEach(element => element.classList.remove('active'));
        document.querySelector('.header__portfolio').classList.add('active');
      };
  
      if (window.scrollY >= aboutBlock.offsetTop - headerHeight
        && window.scrollY < contactBlock.offsetTop - headerHeight) {
        menuBlock.forEach(element => element.classList.remove('active'));
        document.querySelector('.header__about').classList.add('active');
      };
  
      if (window.scrollY >= contactBlock.offsetTop - headerHeight
        || document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight
        || window.scrollY > document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        menuBlock.forEach(element => element.classList.remove('active'));
        document.querySelector('.header__contact').classList.add('active');
      };
    });


/*Sandwich */
const firstSandwichBtn = document.querySelector('.sandwich-container');
const SecondSandwichBtn = document.querySelector('.rotate');
const containerNav = document.querySelector('.navbar');
const singolo = document.querySelector('.logo');
const blur = document.querySelector('.wrapper')

firstSandwichBtn.addEventListener('click',(event)=>{
    containerNav.classList.remove('invisible');
    SecondSandwichBtn.classList.remove('invisible');
    singolo.classList.add('sandwich-singolo');
    firstSandwichBtn.classList.add('invisible');
    blur.classList.add('blur');

});
SecondSandwichBtn.addEventListener('click',(event)=>{
    containerNav.classList.add('invisible');
    SecondSandwichBtn.classList.add('invisible');
    singolo.classList.remove('sandwich-singolo');
    firstSandwichBtn.classList.remove('invisible');
    blur.classList.remove('blur');

});


/* Portfolio */

function change_color_text_portfolio(){
    tags_portfolio.forEach(function(item){
        item.style.color = "#666d89";
        item.style.borderColor = "#666d89";
    });
    this.style.color = "#c5c5c5";
    this.style.borderColor  = '#c5c5c5';

    let temp = img_form_portfolio[0].cloneNode();
    temp.onclick = change_border_image_portfolio;
    parent_images.removeChild(img_form_portfolio[0]);
    parent_images.insertBefore(temp, img_form_portfolio[12]);
    img_form_portfolio = Array.from(document.getElementsByClassName('portfolio__image'));
}

function change_border_image_portfolio(){
    img_form_portfolio.forEach(function(item){
        item.style.borderWidth= "0px";
        item.style.left = "0px";
        item.style.top = "0px";
    });

    this.style.borderWidth = "5px";
    this.style.left = "-5px";
    this.style.top = "-5px";
}

let img_form_portfolio = Array.from(document.getElementsByClassName('portfolio__image'));
let tags_portfolio = Array.from(document.getElementById("portfolio__button").getElementsByTagName('input'));
let parent_images = document.getElementById("portfolio__images");

tags_portfolio.forEach(element => element.onclick = change_color_text_portfolio);

img_form_portfolio.forEach(element => element.onclick = change_border_image_portfolio);

/* get a */
function sumbmit_form(){
    let subject_message = subject.value == '' ? 'Без темы' : 'Тема: ' + subject.value;
    let discribe_message = discribe.value == '' ? 'Без описания' : 'Описание: ' + discribe.value;

    document.body.insertAdjacentHTML('beforeend',
                                '<div id="message" style="position: fixed; top:0px; left:0px; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 11; display: flex; justify-content: center; align-items: center; "> ' +
                                    '<div class="content" style="padding:40px; background-color: white; border-radius: 10px; width: 500px; height: 200px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; color: black">' +   
                                        '<h3>Письмо отправлено</h3>'+
                                        '<h4>' + subject_message + '</h4>'+
                                        '<p style="position: relative; top:0px;">' + discribe_message + '</p>'+
                                        '<button onclick="message_button_click()"style="width: 100px">OK</button>'+
                                    '</div>'+
                                '</div>');
    return false;
}

function message_button_click(){
    name.value = '';
    email.value = '';
    subject.value = '';
    discribe.value = '';
    document.body.removeChild(document.getElementById('message'));
}

let name = document.getElementById('f-name');
let email = document.getElementById('f-email');
let subject = document.getElementById('f-subject');
let discribe = document.getElementById('f-describe');


/* slider */




 let slides = document.querySelectorAll('.slider .item');
 let leftButton = document.querySelector('.slider__left');
 let rightButton = document.querySelector('.slider__right');
 let currentSlide = 0;
 let isEnabled = true;

 function changeCurrentSlide(n) {
     currentSlide = (n + slides.length) % slides.length
 }

 function hideSlide(direction) {
     isEnabled = false;
     slides[currentSlide].classList.add(direction);
     slides[currentSlide].addEventListener('animationend', function() {
         this.classList.remove('active', direction);
     })
 }

 function showSlide(direction) {
     slides[currentSlide].classList.add('next', direction)
     slides[currentSlide].addEventListener('animationend', function() {
         this.classList.remove('next', direction);
         this.classList.add('active');
         isEnabled = true
     })
 }

 function previousSlide(n) {
     hideSlide('to-right')
     changeCurrentSlide(n - 1)
     showSlide('from-left')
 }

 function nextSlide(n) {
     hideSlide('to-left')
     changeCurrentSlide(n + 1)
     showSlide('from-right')
 }

 leftButton.addEventListener('click', function() {
     if (isEnabled) {
         previousSlide(currentSlide);
         hideDisabledScreen();
     }

 });

 rightButton.addEventListener('click', function() {
     if (isEnabled) {
         nextSlide(currentSlide);
         hideDisabledScreen();
     }
 });







/*iphone disabled */
let verticalPhoneDisabled = document.querySelector('.iphone1');
 let horizontalPhoneDisabled = document.querySelector('.iphone2');
 let verticalPhone = document.querySelector('.iphone-one');
 let horizontalPhone = document.querySelector('.iphone-two');

 verticalPhone.addEventListener('click', function() {
     disablePhone(verticalPhoneDisabled);
 });
 verticalPhoneDisabled.addEventListener('click', function() {
     disablePhone(verticalPhoneDisabled);
 })
 horizontalPhone.addEventListener('click', function() {
     disablePhone(horizontalPhoneDisabled);
 });

 horizontalPhoneDisabled.addEventListener('click', function() {
     disablePhone(horizontalPhoneDisabled);
 });

 function disablePhone(phoneType) {
     if (phoneType.classList.contains('disabled')) {
         phoneType.classList.remove('disabled');
     } else {
         phoneType.classList.add('disabled');
     }
 }