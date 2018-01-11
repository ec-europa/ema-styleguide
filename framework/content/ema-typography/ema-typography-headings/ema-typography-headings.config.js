module.exports = {
  title: 'Headings',
  label: 'Headings',
  status: 'ready',
  order: 2,
  collated: true,
  default: 'h1',
  variants: [
    {
      name: 'h1',
      label: 'h1',
      context: {
        element: 'h1',
        class: 'ema-heading ema-heading--h1',
        text: 'Heading <h1> with class ema-heading ema-heading--h1',
      },
    },
    {
      name: 'h2',
      label: 'h2',
      context: {
        element: 'h2',
        class: 'ema-heading ema-heading--h2',
        text: 'Heading <h2> with class ema-heading ema-heading--h2',
      },
    },
    {
      name: 'h3',
      label: 'h3',
      context: {
        element: 'h3',
        class: 'ema-heading ema-heading--h3',
        text: 'Heading <h3> with class ema-heading ema-heading--h3',
      },
    },
    {
      name: 'h4',
      label: 'h4',
      context: {
        element: 'h4',
        class: 'ema-heading ema-heading--h4',
        text: 'Heading <h4> with class ema-heading ema-heading--h4',
      },
    },
  ],
};
