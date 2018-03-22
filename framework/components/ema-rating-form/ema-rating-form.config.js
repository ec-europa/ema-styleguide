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
      });`,
    },
    selector,
    message: 'Tell us more',
    ratings: [
      {
        feedback,
        title: 'Add your rating',
        name: 'ema-rating1',
      },
      {
        title: 'Average',
        name: 'ema-rating2',
        default_rating: 3,
        disabled: true,
      },
    ],
  },
};
