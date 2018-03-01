module.exports = {
  title: 'Rating form',
  label: 'Rating form',
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.ratingForm();
      });`,
    },
    rating: {
      title: 'Your rating',
      name: 'ema-rating',
    },
  },
};
