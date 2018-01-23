module.exports = {
  title: 'Content pages',
  label: 'Content pages',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    header: {
      logo: {
        src: '/framework/images/logo_ema.jpg',
        alt: 'EMA logo',
      },
      links: [
        {
          label: 'Topics A-Z',
          href: '#',
          extra_classes: 'ema-header__link-item',
        },
        {
          label: 'Help',
          href: '#',
          extra_classes: 'ema-header__link-item',
        },
      ],
      user: {
        name: 'John Doe',
        image: {
          src: '',
          alt: '',
        },
      },
    },
    footer: {
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
        src: '/framework/images/eu.png',
        alt: 'European Union flag',
      },
    },
    menu: {
      menu_label: 'Menu',
      menu_aria_label: 'Main Navigation',
      links: [
        {
          label: 'Home',
          href: '#home',
          is_active: true,
        },
        {
          label: 'Item 1',
          href: '#item1',
          children_links: [
            {
              label: 'Item 1.1',
              href: '#item1-1',
            },
            {
              label: 'Item 1.2',
              href: '#item1-2',
            },
            {
              label: 'Item 1.3',
              href: '#item1-3',
            },
            {
              label: 'Item 1.4',
              href: '#item1-4',
            },
            {
              label: 'Item 1.5',
              href: '#item1-5',
            },
            {
              label: 'Item 1.6',
              href: '#item1-6',
            },
          ],
        },
        {
          label: 'Item 2',
          href: '#item2',
          children_links: [
            {
              label: 'Item 2.1',
              href: '#item2-1',
            },
            {
              label: 'Item 2.2',
              href: '#item2-2',
            },
            {
              label: 'Item 2.3',
              href: '#item2-3',
            },
          ],
        },
      ],
    },
    separator: [
      {
        icon: 'multiple-files',
        title: 'Related documents',
      },
      {
        icon: 'digital',
        title: 'Related links',
      },
    ],
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
      });`,
    },
  },
};
