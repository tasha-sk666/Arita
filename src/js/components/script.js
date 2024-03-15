import { helperInput  } from '../_settings.js'
import { bgSlides } from './bg-slides.js'
import { imagesSlidesScroll } from './images-slides.js'
import { shapesSlides } from './shapes-slidest.js'
import { startAnimation } from './start-animation.js'
import { textSlides } from './text-slides.js'

const init = () => {
  window.onload = function() {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-hidden');
    }, 2500);

    setTimeout(() => {
      startAnimation()
      preloader.classList.add('preloader-none');
    }, 2700);
  }

  const showNextSlide = () => {
    bgSlides('down')
    imagesSlidesScroll('down')
    textSlides('down')
    shapesSlides('down')
  }

  const showPrevSlide = () => {
    bgSlides('up')
    imagesSlidesScroll('up')
    textSlides('up')
    shapesSlides('up')
  }

  if (window.innerWidth >= 768) {
    window.addEventListener('wheel', (e) => {
      let delta = -e.deltaY;

      if (delta > 0 ) {
        if(helperInput.value == '1') {
          helperInput.value = 0;
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      } else {
        if(helperInput.value == '1') {
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }
    })
  } else {
    document.addEventListener('swiped-left', () => {
      showNextSlide();
    })
    document.addEventListener('swiped-right', () => {
      showPrevSlide();
    })
  }
}

init()
