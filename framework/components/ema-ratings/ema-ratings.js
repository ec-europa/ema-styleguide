import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

export const ratings = (feedback = []) => {
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  const ratingStars = queryAll(
    '.ema-rating__stars .ema-rating__star:not([disabled]'
  );

  const eventEnter = evt => {
    queryAll('.ema-rating__feedback')[0].innerHTML =
      feedback[evt.currentTarget.getAttribute('for').substr(-1) - 1];
  };

  const eventLeave = () => {
    queryAll('.ema-rating__feedback')[0].innerHTML = '';
  };

  const bindEvents = el => {
    el.addEventListener('mouseenter', eventEnter);
    el.addEventListener('mouseleave', eventLeave);
  };

  const unBindEvents = el => {
    el.removeEventListener('mouseenter', eventEnter);
    el.removeEventListener('mouseleave', eventLeave);
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
export default ratings;
