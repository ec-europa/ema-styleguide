module.exports = {
  title: 'Separator',
  label: 'Separator',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--ema-h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants: [
    {
      name: 'default',
      label: 'Separator',
      context: {
        title: 'Related documents',
      },
    },
    {
      name: 'secondary',
      label: 'Separator secondary',
      context: {
        icon: 'related-documents',
        title: 'Related documents',
        modifier: 'secondary',
      },
    },
  ],
};
