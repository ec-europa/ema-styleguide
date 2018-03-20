module.exports = {
  title: 'Search pages',
  label: 'Search pages',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    header: {
      has_search: 'false',
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
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: "What's new on the site",
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Expert blog',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Human regulation',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Veterinary regulation',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Commitees',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
          ],
        },
        {
          title: 'Ask EMA',
          links: [
            {
              label: 'Public enquiries',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'FAQs',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Access to documents',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
          ],
        },
        {
          title: 'Links',
          links: [
            {
              label: 'Legal',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Privacy',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Complaints',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Browser compatibility',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Contacts',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Business hours and holidays',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Website help',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
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
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Tel: +44 (0)20 3660 6000',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Fax: +44 (0)20 3660 5550',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted',
            },
            {
              label: 'Send a question',
              href: '#',
              extra_classes: 'ecl-link--ema-inverted ecl-link--ema-external',
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
          extra_classes: 'ecl-link--ema-inverted ecl-u-mr-xs',
        },
        {
          label: 'Twitter',
          href: '#',
          icon: 'twitter',
          extra_classes: 'ecl-link--ema-inverted ecl-u-mr-xs',
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
          title: 'Section title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur cursus varius. Ut id leo sed libero placerat feugiat eu eget mi. In hac habitasse platea dictumst. Etiam eleifend justo nec ex lacinia blandit. Aenean pellentesque mauris ut malesuada ultricies. Vestibulum blandit arcu et metus semper porta.',
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
    items: [
      {
        title: 'Adaptive pathways',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 13/04/2016<br />Updated 13/12/2016</small></div>',
      },
      {
        title:
          'Checklist for sponsors applying for the transfer of orphan medicinal product designation <small class="ema-u-color-grey-2">(PDF - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        icon: 'pdf',
        extra_classes: 'ema-list-item--file',

        translations: [
          { title: 'French', meta: '230 kB - PDF' },
          { title: 'German', meta: '230 kB - PDF' },
          { title: 'Spanish', meta: '230 kB - PDF' },
        ],
        translations_label: 'Available languages (3)',
        translations_tooltip: 'Click to see translations',
        translations_id: 'translations-1',
      },
      {
        title:
          'Data on medicines (ISO IDMP standards): research and development',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
      {
        title: 'Medicines for older people',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
      {
        title: 'Non-pharmaceutical products',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
      {
        title:
          'Template 1 - Orphan designation transfer form <small class="ema-u-color-grey-2">(DOC - 512kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 13/04/2016<br />Updated 13/12/2016</small></div>',
        icon: 'word',
        extra_classes: 'ema-list-item--file',

        translations: [
          { title: 'French', meta: '230 kB - DOC' },
          { title: 'German', meta: '230 kB - DOC' },
          { title: 'Spanish', meta: '230 kB - DOC' },
        ],
        translations_label: 'Available languages (3)',
        translations_tooltip: 'Click to see translations',
        translations_id: 'translations-2',
      },
      {
        title: 'Ancillary medicinal substances',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
      {
        title: 'Pharmacovigilance: research and development',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
      {
        title: 'EudraVigilance',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
      {
        title: 'Scientific advice and protocol assistance',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
      },
    ],
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
        ECL.initExpandables('.ecl-file__translations-toggle');
        ECL.initExpandables('#form-filter-toggle');

        const date_from = new Pikaday({
          field: document.getElementById('date-from'),
          firstDay: 1,
          maxDate: new Date(2020, 12, 31),
          theme: 'ecl-pika-theme',
          yearRange: [2000, 2020],
          format: 'DD/MM/YYYY',
        });
        const date_to = new Pikaday({
          field: document.getElementById('date-to'),
          firstDay: 1,
          maxDate: new Date(2020, 12, 31),
          theme: 'ecl-pika-theme',
          yearRange: [2000, 2020],
          format: 'DD/MM/YYYY',
        });
      });`,
    },
  },
};
