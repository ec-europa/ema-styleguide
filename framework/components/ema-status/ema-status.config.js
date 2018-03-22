module.exports = {
  title: 'Status',
  label: 'Status',
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
        variant: 'info',
        status: 'Current status',
        description: 'European Commission final decision',
      },
    },
    {
      name: 'authorized',
      label: 'Authorized',
      context: {
        variant: 'authorized',
        status: 'Authorized',
        description: 'This medicine is approved for use in the European Union',
      },
    },
    {
      name: 'refused',
      label: 'Refused',
      context: {
        variant: 'refused',
        status: 'Refused',
        description: 'This medicinal product has been refused',
      },
    },
  ],
};
