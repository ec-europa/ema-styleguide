module.exports = {
  title: 'Headers',
  label: 'Headers',
  status: 'ready',
  tags: ['molecule'],
  context: {
    logo: {
      src: '../../framework/images/logo_ema.jpg',
      alt: 'EMA logo',
    },
    links: [
      {
        label: '<span class="ecl-icon ecl-icon--rss"></span>',
        href: '#',
        extra_classes: 'ema-header__link-item ecl-link--ema-obvious',
        extra_attributes: [{ name: 'title', value: 'RSS' }],
      },
      {
        label: '<span class="ecl-icon ecl-icon--twitter"></span>',
        href: '#',
        extra_classes: 'ema-header__link-item ecl-link--ema-obvious',
        extra_attributes: [{ name: 'title', value: 'Twitter' }],
      },
      {
        label: '<span class="ecl-icon ecl-icon--generic-lang"></span>',
        href: '#',
        extra_classes: 'ema-header__link-item ecl-link--ema-obvious',
        extra_attributes: [{ name: 'title', value: 'Mail' }],
      },
    ],
  },
};
