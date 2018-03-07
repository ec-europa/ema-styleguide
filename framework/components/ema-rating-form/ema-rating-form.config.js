const feedback = [
  'Unhelpful',
  'Not very helpful',
  'Fairly helpful',
  'Helpful',
  'Very helpful',
];
const selector = 'ema-rating-form__review';

module.exports = {
  title: 'Rating form',
  label: 'Rating form',
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.ratingForm(${JSON.stringify(selector)});
        ECL.ratings(${JSON.stringify(feedback)});
      });`,
    },
    selector,
    message: 'Tell us more',
    rating: {
      feedback,
      title: 'Your rating',
      name: 'ema-rating',
    },
  },
};
