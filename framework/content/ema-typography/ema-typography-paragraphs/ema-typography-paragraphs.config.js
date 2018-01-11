module.exports = {
  title: 'Paragraphs',
  label: 'Paragraphs',
  status: 'ready',
  order: 3,
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      <h2 class="ema-heading ema-heading--h2">${item.label}</h2>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n`;
  },
  default: 'l',
  variants: [
    {
      name: 'l',
      label: 'Leading paragraph',
      context: {
        modifier: 'ecl-paragraph ecl-paragraph--l',
      },
    },
    {
      name: 'm',
      label: 'Medium paragraph',
      context: {
        modifier: 'ecl-paragraph ecl-paragraph--m',
      },
    },
    {
      name: 's',
      label: 'Small paragraph',
      context: {
        modifier: 'ecl-paragraph ecl-paragraph--s',
      },
    },
    {
      name: 'xs',
      label: 'Extra small paragraph',
      context: {
        modifier: 'ecl-paragraph ecl-paragraph--xs',
      },
    },
    {
      name: 'xxs',
      label: 'Extra extra small paragraph',
      context: {
        modifier: 'ecl-paragraph ecl-paragraph--xxs',
      },
    },
  ],
};
