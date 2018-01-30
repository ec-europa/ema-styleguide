module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      <h2 class="ecl-heading ecl-heading--ema-h2">${item.label}</h2>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default',
      label: 'Links in body text',
      context: {
        extra_classes: 'ecl-link--ema-default',
        href: '#',
        label: 'in-line link',
      },
    },
    {
      name: 'external',
      label: 'External links',
      context: {
        extra_classes: 'ecl-link--ema-external',
        href: '#',
        label: 'external link',
      },
    },
    {
      name: 'standalone',
      label: 'Standalone links',
      context: {
        extra_classes: 'ecl-link--ema-standalone',
        href: '#',
        label: 'standalone link',
      },
    },
    {
      name: 'obvious',
      label: 'Obvious links',
      context: {
        extra_classes: 'ecl-link--ema-obvious',
        href: '#',
        label: 'obvious link',
      },
    },
    {
      name: 'inverted',
      label: 'Inverted links (could be standalone or external too)',
      context: {
        extra_classes: 'ecl-link--ema-inverted ema-u-bg-primary',
        href: '#',
        label: 'inverted link',
      },
    },
  ],
};
