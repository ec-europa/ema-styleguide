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
        extra_classes: '',
        title: "What's new",
      },
    },
  ],
};
