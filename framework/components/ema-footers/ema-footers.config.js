module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['molecule'],
  context: {
    links: [
      {
        label: 'Help',
        href: '#',
        extra_classes: 'ecl-link--ema-inverted ema-footer__link-item',
      },
      {
        label: 'Sitemap',
        href: '#',
        extra_classes: 'ecl-link--ema-inverted ema-footer__link-item',
      },
      {
        label: 'EMA public website',
        href: '#',
        extra_classes:
          'ecl-link--ema-inverted ecl-link--ema-external ema-footer__link-item',
      },
    ],
    copyright:
      '&copy; 2016 EMA - 30 Churchill Place - Canary Whaf - London E14 5EU - United Kingdom',
    description: 'An agency of the European Union',
    logo: {
      src: '../../framework/images/eu.png',
      alt: 'European Union flag',
    },
  },
};
