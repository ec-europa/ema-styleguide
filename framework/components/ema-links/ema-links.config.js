module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      <h2 class="ema-heading ema-heading--h2">${item.label}</h2>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default',
      label: 'Links in body text',
      context: {
        href: '#',
        label: 'in-line link',
      },
    },
    {
      name: 'external',
      label: 'External links',
      context: {
        variant: 'external',
        href: '#',
        label: 'external link',
      },
    },
    {
      name: 'standalone',
      label: 'Standalone links',
      context: {
        variant: 'standalone',
        href: '#',
        label: 'standalone link',
      },
    },
    {
      name: 'obvious',
      label: 'Obvious links',
      context: {
        variant: 'obvious',
        href: '#',
        label: 'obvious link',
      },
    },
    {
      name: 'inverted',
      label: 'Inverted links (could be standalone or external too)',
      context: {
        variant: 'inverted',
        href: '#',
        label: 'inverted link',
        extra_classes: 'ema-u-bg-primary',
      },
    },
  ],
};
