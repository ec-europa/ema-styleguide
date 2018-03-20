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
    title: 'Add your rating',
    name: 'ema-rating',
    feedback,
  },
};
