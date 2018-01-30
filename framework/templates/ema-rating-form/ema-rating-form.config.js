module.exports = {
  title: 'Rating Form',
  label: 'Rating Form',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    ratings: [
      {
        title: 'Your rating',
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
