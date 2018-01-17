module.exports = {
  title: 'Headings',
  label: 'Headings',
  status: 'ready',
  collated: true,
  default: 'h1',
  variants: [
    {
      name: 'h1',
      label: 'h1',
      context: {
        element: 'h1',
        class: 'ecl-heading ecl-heading--ema-h1',
        text: 'Heading <h1>: class ema-heading ema-heading--h1',
      },
    },
    {
      name: 'h2',
      label: 'h2',
      context: {
        element: 'h2',
        class: 'ecl-heading ecl-heading--ema-h2',
        text: 'Heading <h2>: class ema-heading ema-heading--h2',
      },
    },
    {
      name: 'h3',
      label: 'h3',
      context: {
        element: 'h3',
        class: 'ecl-heading ecl-heading--ema-h3',
        text: 'Heading <h3>: class ema-heading ema-heading--h3',
      },
    },
    {
      name: 'h4',
      label: 'h4',
      context: {
        element: 'h4',
        class: 'ecl-heading ecl-heading--ema-h4',
        text: 'Heading <h4>: class ema-heading ema-heading--h4',
      },
    },
  ],
};
