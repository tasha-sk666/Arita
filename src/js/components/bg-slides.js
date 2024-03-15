import { mainSection, shapes, bgItems } from '../_settings.js'

const slidesCount = 5;
let slideCounter = 1;

shapes.forEach(el => {
  el.style.backgroundColor = `${el.dataset.bg}`
});

bgItems.forEach(el => {
  el.style.backgroundImage = `url(${el.dataset.bg})`
});

export const bgSlides = (direction) => {
  let itemClass = `slide-${slideCounter}`;

  if(direction == 'down') {
    if(slideCounter < slidesCount) {
      mainSection.classList.remove(itemClass);
      slideCounter++;

      itemClass = `slide-${slideCounter}`;
      mainSection.classList.add(itemClass);
    }
  } else if (direction == 'up') {
    if(slideCounter > 1) {
      mainSection.classList.remove(itemClass);
      slideCounter--;

      itemClass = `slide-${slideCounter}`;
      mainSection.classList.add(itemClass);
    }
  }
}
