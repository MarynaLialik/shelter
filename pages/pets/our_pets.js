const burger = document.querySelector('.burger');
const blur_area = document.querySelector('.blur_back');
const nav_link_list = document.getElementsByClassName('navigation__link');

burger.addEventListener('click', toggleMenu);

function toggleMenu()
{
    document.querySelector('.header__navigation').classList.toggle("active-pets-mobile");
    document.querySelector('.navigation').classList.toggle("vertical-navigation");
    document.querySelector('.header__wrapper').classList.toggle("active-header");
    document.querySelector('.blur_back').classList.toggle("blur-back-active");
    burger.classList.toggle("burger-rotate");  
}
blur_area.addEventListener ('click', toggleMenu);
for (let i = 0; i < nav_link_list .length; i++) {
    nav_link_list[i].addEventListener('click', toggleMenu);
}
nav_link_list[3].addEventListener('click', toggleMenu);