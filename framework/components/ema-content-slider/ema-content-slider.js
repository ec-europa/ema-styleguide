import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const contentSlider = ({
  selector: selector = '.ema-content-slider',
  headerSelector: headerSelector = '.ema-content-slider__items .ecl-list-item',
} = {}) => {
  // if (
  //   !('querySelector' in document) ||
  //   !('addEventListener' in window) ||
  //   !document.documentElement.classList
  // )
  //   return null;

  // SETUP
  // set accordion element NodeLists
  const contentSliderContainers = queryAll(selector);
  console.log(contentSliderContainers);
};

// module exports
export default contentSlider;
