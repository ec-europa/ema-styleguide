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
    title: 'Your rating',
    name: 'ema-rating',
    feedback,
  },
};
