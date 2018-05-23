const feedback = [
  'Unhelpful',
  'Not very helpful',
  'Fairly helpful',
  'Helpful',
  'Very helpful',
];
const selector = 'ema-rating-form__review';

module.exports = {
  title: 'Medicine content pages',
  label: 'Medicine content pages',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    header: {
      logo: {
        src: '../../framework/images/logo_ema.jpg',
        alt: 'EMA logo',
      },
      links: [],
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
      logo_network: {
        src: '../../framework/images/euan.png',
        alt: 'European Union agencies network',
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
    banner: {
      title: 'Medicines',
      description:
        'This section of the website provides information on the regulation of medicines for human use in the European Union (EU). It particularly concerns the centralised procedure, where the European Medicines Agency (EMA) plays a key role.',
    },
    status: {
      variant: 'authorised',
      status: 'Authorised',
      description: 'This medicine is authorised for use in the European Union',
    },
    safety: {
      variant: 'patient-safety',
      status: 'Patient safety',
      description: 'Patient safety informations',
    },
    ratingForm: {
      message: 'Tell us more',
      ratings: [
        {
          feedback,
          title: 'Add your rating',
          name: 'ema-rating1',
        },
        {
          title: 'Average',
          name: 'ema-rating2',
          default_rating: 3,
          disabled: true,
        },
      ],
    },
    items: [
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
      },
      {
        title:
          'Template 1 - Orphan designation transfer form <small class="ema-u-color-grey-2">(DOC - 512kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 13/04/2016<br />Updated 13/12/2016</small></div>',
        icon: 'word',
        extra_classes: 'ema-list-item--file',
      },
      {
        title:
          'Template 2 - Translations of the active ingredient and indication for transfer of orphan-medicinal-product designation <small class="ema-u-color-grey-2">(DOCX - 132kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
        icon: 'word',
        extra_classes: 'ema-list-item--file',
      },
    ],
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
        ECL.ratingForm(${JSON.stringify(selector)});
        ECL.initExpandables('.ecl-file__translations-toggle');
      });`,
    },
  },
};
