export const mainSection = document.querySelector('.main-section');
export const slideBg = document.querySelector('.slide-bg');
export const bgItems = document.querySelectorAll('.slide-bg__link');
export const imageSlides = document.querySelectorAll('.slide-bg__inner');
export const shapes = document.querySelectorAll('.shapes__content');
export const shapesItem = document.querySelectorAll('.shapes__item');
export const helperInput = document.querySelector('#helper-input');
export const links = document.querySelectorAll('a');

export const easing = '0.77, 0.125, 0.265, 1.04';

export const startComplite = () => {
  imageSlides.forEach(el => {el.style.opacity = 1});
  shapesItem.forEach(el => {el.style.opacity = 1});
}
export const startingTl = gsap.timeline({defaults: {ease: easing}, onComplete: startComplite});





