const feedback = [
  'Unhelpful',
  'Not very helpful',
  'Fairly helpful',
  'Helpful',
  'Very helpful',
];

module.exports = {
  title: 'Ratings',
  label: 'Ratings',
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.ratings(${JSON.stringify(feedback)});
      });`,
    },
    title: 'Your rating',
    name: 'ema-rating',
  },
};
