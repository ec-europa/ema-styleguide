const feedback = [
  'Unhelpful',
  'Not very helpful',
  'Fairly helpful',
  'Helpful',
  'Very helpful',
];

module.exports = {
  title: 'Rating form',
  label: 'Rating form',
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.ratingForm();
        ECL.ratings(${JSON.stringify(feedback)});
      });`,
    },
    rating: {
      title: 'Your rating',
      name: 'ema-rating',
    },
  },
};
