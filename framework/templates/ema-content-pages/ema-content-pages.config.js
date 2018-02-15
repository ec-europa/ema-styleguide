module.exports = {
  title: 'Content pages',
  label: 'Content pages',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    header: {
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
    footer: {
      sections: [
        {
          title: 'About',
          links: [
            {
              label: 'Who we are',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: "What's new on the site",
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Expert blog',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Human regulation',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Veterinary regulation',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Commitees',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
          ],
        },
        {
          title: 'Ask EMA',
          links: [
            {
              label: 'Public enquiries',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'FAQs',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Access to documents',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
          ],
        },
        {
          title: 'Links',
          links: [
            {
              label: 'Legal',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Privacy',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Complaints',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Browser compatibility',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Contacts',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Business hours and holidays',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Website help',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
          ],
        },
        {
          title: 'Contact',
          links: [
            {
              label:
                'EMA<br />30 Churchill Place<br />Canary Whaf<br />London E14 5EU<br />United Kingdom',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Tel: +44 (0)20 3660 6000',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Fax: +44 (0)20 3660 5550',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-standalone',
            },
            {
              label: 'Send a question',
              href: '#',
              extra_classes:
                'ecl-link--ema-inverted ecl-link--ema-external ecl-link--ema-standalone',
            },
          ],
        },
      ],
      hotline: {
        href: '#',
        title: 'Product emergency hotline',
        description: 'outside working hours',
      },
      social: [
        {
          label: 'RSS',
          href: '#',
          icon: 'rss',
          extra_classes:
            'ecl-link--ema-inverted ecl-link--ema-standalone ecl-u-mr-xs',
        },
        {
          label: 'Twitter',
          href: '#',
          icon: 'twitter',
          extra_classes:
            'ecl-link--ema-inverted ecl-link--ema-standalone ecl-u-mr-xs',
        },
      ],
      copyright: '&copy; 1995-2016 European Medicines Agency',
      description: 'An agency of the European Union',
      logo: {
        src: '../../framework/images/eu.png',
        alt: 'European Union flag',
      },
    },
    menu: {
      menu_label: 'Menu',
      menu_aria_label: 'Main Navigation',
      extra_classes: 'ecl-navigation-menu--ema',
      links: [
        {
          label: 'Home',
          href: '#home',
        },
        {
          label: 'Human regulatory',
          href: '#item1',
          title: 'Human regulatory',
          description:
            'This section of the website provides information on the regulation of medicines for human use in the European Union (EU). It particularly concerns the centralised procedure, where the European Medicines Agency (EMA) plays a key role.',
          is_active: true,
          children_links: [
            {
              label: 'Overview',
              href: '#item1-1',
            },
            {
              label: 'Marketing authorisation',
              href: '#item1-4',
            },
            {
              label: 'Research and development',
              href: '#item1-2',
              is_active: true,
            },
            {
              label: 'Post authorisation',
              href: '#item1-5',
            },
            {
              label: 'Herbal products',
              href: '#item1-3',
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
            {
              label: 'Item 2.4',
              href: '#item2-4',
            },
            {
              label: 'Item 2.5',
              href: '#item2-5',
            },
            {
              label: 'Item 2.6',
              href: '#item2-6',
            },
          ],
        },
        {
          label: 'Item 3',
          href: '#item3',
        },
      ],
    },
    banner: {
      title: 'Human regulatory',
      description:
        'This section of the website provides information on the regulation of medicines for human use in the European Union (EU). It particularly concerns the centralised procedure, where the European Medicines Agency (EMA) plays a key role.',
      links: [
        {
          label: 'Overview',
          href: '#item1-1',
        },
        {
          label: 'Marketing authorisation',
          href: '#item1-4',
        },
        {
          label: 'Research and development',
          href: '#item1-2',
          is_active: true,
        },
        {
          label: 'Post authorisation',
          href: '#item1-5',
        },
        {
          label: 'Herbal products',
          href: '#item1-3',
        },
      ],
    },
    sideNavigation: {
      list: [
        {
          label: 'Adaptive pathways',
          link: '#',
        },
        {
          label: 'Advanced therapies',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Clinical trials',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Compassionate use',
          link: '#',
        },
        {
          label: 'Compliance',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Data on medicines (ISO IDMP standards)',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Geriatric medicine',
          link: '#',
        },
        {
          label: 'Innovation in medicines',
          link: '#',
        },
        {
          label: 'Non-pharmaceutical products',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Orphan designation',
          link: '#',
          list: [
            {
              label: 'Annual report',
              link: '#',
            },
            {
              label: 'How to apply',
              link: '#',
              canExpand: true,
            },
            {
              label: 'Incentives',
              link: '#',
            },
            {
              label: 'Transfers',
              link: '#',
              active: true,
            },
          ],
        },
        {
          label: 'Paediatric medicines',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Pharmacovigilance',
          link: '#',
          canExpand: true,
        },
        {
          label: 'PRIME: priority medicines',
          link: '#',
        },
        {
          label: 'Quality by design',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Scientific advice and protocol assistance',
          link: '#',
          canExpand: true,
        },
        {
          label: 'Scientific guidelines',
          link: '#',
          canExpand: true,
        },
      ],
    },
    ratings: [
      {
        title: 'Your rating',
        name: 'ema-rating1',
      },
      {
        title: 'Average',
        name: 'ema-rating2',
        default_rating: 3,
        disabled: true,
      },
    ],
    files: {
      variant: 'translation',
      title: 'File title example',
      language: 'English',
      meta: '213.25 kB - PDF - 4 pages',
      button_label: 'Download',
      icon: 'file',
      translations: [
        {
          title: 'Titre du fichier',
          meta: '228.84 kB - PDF - 4 pages',
        },
        {
          title: 'Dateititel',
          meta: '232.12 kB - PDF - 4 pages',
        },
        {
          title: 'Файл Заглавие',
          meta: '257.54 kB - PDF - 4 pages',
        },
      ],
      translations_label: 'Available languages (3)',
      translations_tooltip: 'Click to see translations',
    },
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
        ECL.initExpandables('#translations-expand-button');
      });`,
    },
  },
};
