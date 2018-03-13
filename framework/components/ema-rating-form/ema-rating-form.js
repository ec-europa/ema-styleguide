import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

export const ratingForm = (selector = '') => {
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  const ratingStars = queryAll(`#${selector} .ema-rating__star:not([disabled]`);

  const eventItemClick = () => {
    const block = queryAll(`#${selector}`)[0].getAttribute('aria-controls');
    queryAll(`#${block}`)[0].removeAttribute('aria-hidden');
  };

  const bindEvents = el => {
    el.addEventListener('click', eventItemClick);
  };

  const unBindEvents = el => {
    el.removeEventListener('click', eventItemClick);
  };

  const init = () => {
    if (ratingStars.length) {
      ratingStars.forEach(star => {
        bindEvents(star);
      });
    }
  };

  const destroy = () => {
    if (ratingStars.length) {
      ratingStars.forEach(star => {
        unBindEvents(star);
      });
    }
  };

  init();

  return {
    init,
    destroy,
  };
};

// module exports
export default ratingForm;
