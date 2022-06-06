console.log("hello");

const burger = document.querySelector('.burger');
burger.addEventListener('click', showMenu);
function showMenu()
{
    document.querySelector('.header__navigation').classList.toggle("active-pets-mobile");
    document.querySelector('.navigation').classList.toggle("vertical-navigation");
    document.querySelector('.header__wrapper').classList.toggle("active-header");
    document.querySelector('.blur_back').classList.toggle("blur-back-active");

    burger.classList.toggle("burger-rotate");
    
}