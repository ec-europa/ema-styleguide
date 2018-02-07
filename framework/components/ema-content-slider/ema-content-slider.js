import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const contentSlider = ({
  contentSliderSelector: contentSliderSelector = '.ema-content-slider',
  listItemSelector: listItemSelector = '.ema-content-slider .ecl-list-item',
  listItemHighlightSelector: listItemHighlightSelector = '.ema-content-slider .ecl-list-item--highlight.ema-content-slider__list-item--highlight',
} = {}) => {
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // ACTIONS
  function hideAllHighlights() {
    queryAll(listItemHighlightSelector).forEach(el => {
      el.setAttribute('aria-hidden', true);
    });
  }

  function showOwnHighlight(target) {
    hideAllHighlights();

    // get its highlight
    const hightlight = document.getElementById(
      target.getAttribute('aria-controls')
    );

    hightlight.setAttribute('aria-hidden', 'false');
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

  // SETUP
  // set contentSlider element NodeLists
  const contentSliderContainers = queryAll(contentSliderSelector);

  // INIT
  function init() {
    if (contentSliderContainers.length) {
      contentSliderContainers.forEach(contentSliderContainer => {
        bindAccordionEvents(contentSliderContainer);
      });
    }
    hideAllHighlights();
    // Display first item by default
    showOwnHighlight(document.querySelectorAll(listItemSelector)[0]);
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
