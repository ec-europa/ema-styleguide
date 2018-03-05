module.exports = {
  title: 'Review Form',
  label: 'Review Form',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.ratingForm();
      });`,
    },
  },
};
