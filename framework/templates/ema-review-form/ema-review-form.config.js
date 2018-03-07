const feedback = [
  'Unhelpful',
  'Not very helpful',
  'Fairly helpful',
  'Helpful',
  'Very helpful',
];
const selector = 'ema-rating-2';

module.exports = {
  title: 'Review Form',
  label: 'Review Form',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.ratingForm(${JSON.stringify(selector)});
        ECL.ratings(${JSON.stringify(feedback)});
      });`,
    },
    feedback,
    form: {
      selector,
      message: 'Tell us more',
    },
  },
};
