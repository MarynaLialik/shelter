console.log("hello");

const burger = document.querySelector('.burger');
const blur_area = document.querySelector(.blur_back);

burger.addEventListener('click', showMenu);
function showMenu()
{
    document.querySelector('.header__navigation').classList.toggle("active-main-mobile");
    document.querySelector('.navigation').classList.toggle("vertical-navigation");
    document.querySelector('.header__wrapper').classList.toggle("active-header");
    document.querySelector('.blur_back').classList.toggle("blur-back-active");

    burger.classList.toggle("burger-rotate");  
}

blur_area.addEventListener ('click', showMenu);
function closeMenu () {
    document.querySelector('.header__navigation').classList.toggle("active-main-mobile");
    document.querySelector('.navigation').classList.toggle("vertical-navigation");
    document.querySelector('.header__wrapper').classList.toggle("active-header");
    document.querySelector('.blur_back').classList.toggle("blur-back-active");

    burger.classList.toggle("burger-rotate");  
}