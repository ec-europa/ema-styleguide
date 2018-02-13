import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const contentSlider = ({
  contentSliderSelector: contentSliderSelector = '.ema-content-slider',
  listItemSelector: listItemSelector = '.ema-content-slider .ema-content-slider__list-item--default',
  listItemHighlightSelector: listItemHighlightSelector = '.ema-content-slider .ema-content-slider__list-item--highlight',
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
    e.preventDefault();
    const target = e.currentTarget;

    if (!isOwnHighlightVisible(target)) showOwnHighlight(target);
  }

  // BIND EVENTS
  function bindContentSliderEvents(contentSliderContainer) {
    const listItems = queryAll(listItemSelector, contentSliderContainer);
    // bind all items in the list click and keydown events
    listItems.forEach(listItem => {
      listItem.addEventListener('click', eventItemClick);
    });
  }

  // UNBIND EVENTS
  function unbindContentSliderEvents(contentSliderContainer) {
    const listItems = queryAll(listItemSelector, contentSliderContainer);
    // bind all items in the list click and keydown events
    listItems.forEach(listItem => {
      listItem.removeEventListener('click', eventItemClick);
    });
  }

  // SETUP
  // set contentSlider element NodeLists
  const contentSliderContainers = queryAll(contentSliderSelector);

  // DESTROY
  function destroy() {
    if (contentSliderContainers.length) {
      contentSliderContainers.forEach(contentSliderContainer => {
        unbindContentSliderEvents(contentSliderContainer);
      });
    }
  }

  // INIT
  function init() {
    if (contentSliderContainers.length) {
      contentSliderContainers.forEach(contentSliderContainer => {
        bindContentSliderEvents(contentSliderContainer);
      });
    }
    hideAllHighlights();
    // Hightlight first item in the list by default
    // by simulating a click
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
