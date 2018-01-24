module.exports = {
  title: 'Ratings',
  label: 'Ratings',
  status: 'ready',
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
