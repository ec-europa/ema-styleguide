module.exports = {
  title: 'Card',
  label: 'Card',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n`;
  },
  default: 'info',
  variants: [
    {
      name: 'info',
      label: 'Info',
      context: {
        variant: 'cta',
        title: "What's new",
        content:
          'Find all the latest news and updates published on this website in one place.',
      },
    },
    {
      name: 'authorised',
      label: 'Authorised',
      context: {
        title: 'Authorised',
        content: 'This medicine is authorised for use in the European Union',
      },
    },
  ],
};
