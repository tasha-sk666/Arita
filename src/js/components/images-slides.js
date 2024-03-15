import { easing, imageSlides } from "../_settings";

export const imagesSlidesScroll = (direction) => {
  const imageSlides = document.querySelectorAll('.slide-bg__inner');
  let currentSlide = document.querySelector('.slide-bg__inner--active');
  let nextSlide
  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

  if (nextSlide) {
    imageSlides.forEach(el => {el.classList.remove('slide-bg__inner--index')});

    currentSlide.classList.add('slide-bg__inner--index');

    const tl = gsap.timeline({
      default: { ease: easing},
      onComplete: function() {
        currentSlide.classList.remove('slide-bg__inner--index')
      }
    });

    tl.from(nextSlide, 0.5, {
      xPercent: 100,
    })
    .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
      xPercent: -100,
      delay: -0.5
    })

    currentSlide.classList.remove('slide-bg__inner--active')
    nextSlide.classList.add('slide-bg__inner--active')
  }
}
