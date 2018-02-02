import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const contentSlider = ({
  selector: selector = '.ema-content-slider',
  listItemSelector: listItemSelector = '.ema-content-slider .ecl-list-item',
  listHighlightSelector: listHighlightSelector = '.ema-content-slider .ecl-list-item--highlight.ema-content-slider__ema-list-item-highlight',
  activeHighlightSelector: activeHighlightSelector = 'ema-content-slider__ema-list-item-highlight--active',
} = {}) => {
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  // set contentSlider element NodeLists
  const contentSliderContainers = queryAll(selector);

  // ACTIONS
  function hideAllHighlights() {
    queryAll(listHighlightSelector).forEach(el => {
      el.setAttribute('aria-hidden', true);
      el.classList.remove(activeHighlightSelector);
    });
  }

  function showOwnHighlight(target) {
    hideAllHighlights();

    // get its highlight
    const hightlight = document.getElementById(
      target.getAttribute('aria-controls')
    );

    hightlight.setAttribute('aria-hidden', 'false');
    hightlight.classList.add(activeHighlightSelector);
  }

  function isOwnHighlightVisible(target) {
    const hightlight = document.getElementById(
      target.getAttribute('aria-controls')
    );
    return hightlight.getAttribute('aria-hidden') !== 'true';
  }

  // EVENTS
  function eventItemClick(e) {
    const target = e.currentTarget;

    if (!isOwnHighlightVisible(target)) showOwnHighlight(target);
  }

  // BIND EVENTS
  function bindAccordionEvents(contentSliderContainer) {
    const listItems = queryAll(listItemSelector, contentSliderContainer);
    // bind all items in the list click and keydown events
    listItems.forEach(listItem => {
      listItem.addEventListener('click', eventItemClick);
    });
  }

  // DESTROY
  function destroy() {
    // ...
  }

  // INIT
  function init() {
    if (contentSliderContainers.length) {
      contentSliderContainers.forEach(contentSliderContainer => {
        bindAccordionEvents(contentSliderContainer);
      });
    }
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default contentSlider;
