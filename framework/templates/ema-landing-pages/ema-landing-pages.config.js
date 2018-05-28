module.exports = {
  title: 'Landing pages',
  label: 'Landing pages',
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
      extra_classes: 'ema-context-banner--standalone',
      title: 'Healthcare Professionals',
      description:
        'On this page, you will find information on the Agency’s activities that are most relevant to healthcare professionals, including news, and events. You can contribute to the Agency’s work by responding to public consultations. Learn more about how Healthcare Professionals are actively involved in the work of the Agency.',
      links: [],
    },
    items_featured: [
      {
        title: 'Orphan medicines: getting the facts straight',
        href: '#listing-thumbnail',
        detail:
          'EMA has published a question-and-answer document addressing common misunderstandings about the meaning of orphan designation and other aspects pertaining to orphan medicines, including significant benefit and market exclusivity. For more information, see Orphan designation.',
        primary_image: {
          src:
            'http://www.ema.europa.eu/ema/images/features/rare_diseases_q_a.jpg',
          alt: 'news alt text',
        },
      },
      {
        title: 'Human medicines highlights 2017',
        href: '#listing-thumbnail',
        detail:
          'EMA has released an overview of its key recommendations in 2017 on the authorisation of new medicines. EMA recommended 92 medicines for marketing authorisation. This includes recommendations for 35 new active substances.',
        primary_image: {
          src:
            'http://www.ema.europa.eu/ema/images/leaflet_highlights_2017.jpg',
          alt: 'news alt text',
        },
      },
      {
        title: 'New orphan maintenance assessment reports',
        href: '#listing-thumbnail',
        detail:
          'As of 17 January 2018, the European Public Assessment Report (EPAR) for every newly-authorised medicine contains an orphan maintenance assessment report if it was granted orphan-designation during the development phase. This report reflects the Agency’s Committee for Orphan Medicinal Products (COMP) opinion on whether a medicine continues to meet the orphan designation criteria when it is authorised, and will be published for all positive and negative COMP opinions, as well as withdrawals. This determines whether it benefits from ten years market exclusivity, a key incentive to stimulate the development of medicines to treat rare diseases.',
        primary_image: {
          src: 'http://www.ema.europa.eu/ema/images/OMAR2.jpg',
          alt: 'news alt text',
        },
      },
      {
        title: 'Ten-year report on implementation of the Paediatric Regulation',
        href: '#listing-thumbnail',
        detail:
          'In October 2017, the European Commission published a report on progress made in children s medicinesExternal link icon since the Paediatric Regulation came into force 10 years ago. The report shows an increase in medicines for children in many therapeutic areas in the last ten years, most notably in rheumatology and infectious diseases. However, it also shows that little progress has been made in diseases that only affect children or where the disease shows biological differences between adults and children, particularly rare diseases. The Commission and EMA and its Paediatric Committee will develop an action plan to improve the implementation of the Regulation.',
        primary_image: {
          src:
            'http://www.ema.europa.eu/ema/images/features/EC_paediatric_report.jpg',
          alt: 'news alt text',
        },
      },
    ],
    items_news: [
      {
        title: 'Updated measures for pregnancy prevention during retinoid use',
        href: '#listing-default-two-1',
        detail:
          'Warning on possible risk of neuropsychiatric disorders also to be included for oral retinoids.',
        metas: ['23/03/2018'],
      },
      {
        title: 'Withdrawal of pain medicine flupirtine endorsed',
        href: '#listing-default-two-1',
        detail:
          'Serious liver problems continued to be reported despite previous restrictions in use.',
        metas: ['23/03/2018'],
      },
      {
        title:
          'Workshop on Paediatric Regulation – stakeholders to discuss how to boost development of medicines for children',
        href: '#listing-default-two-1',
        detail: 'Event to be broadcast live on 20 March.',
        metas: ['19/03/2018'],
      },
      {
        title: 'EMA Management Board: highlights of March 2018 meeting',
        href: '#listing-default-two-1',
        detail:
          'Board adopts 2017 report on veterinary medicines for minor use minor species and hears update on clinical trial portal and database.',
        metas: ['16/03/2018'],
      },
      {
        title:
          'Meeting highlights from the Pharmacovigilance Risk Assessment Committee (PRAC) 5-8 March 2018',
        href: '#listing-default-two-1',
        detail:
          'Immediate measures agreed for Zinbryta and Xofigo while reviews are ongoing; public hearing decided for quinolone and fluoroquinolone antibiotics.',
        metas: ['09/03/2018'],
      },
      {
        title:
          'Meeting highlights from the Pharmacovigilance Risk Assessment Committee (PRAC) 5-8 March 2018',
        href: '#listing-default-two-1',
        detail:
          'Immediate measures agreed for Zinbryta and Xofigo while reviews are ongoing; public hearing decided for quinolone and fluoroquinolone antibiotics.',
        metas: ['09/03/2018'],
      },
    ],
    items_events: [
      {
        variant: 'date',
        date: {
          week_day: 'Tue-Fri',
          day: '05-08',
          month: 'Mar',
        },
        title:
          'Pharmacovigilance Risk Assessment Committee (PRAC): 5-8 March 2018',
        href: '#listing-default-two-1',
        detail:
          'The Pharmacovigilance Risk Assessment Committee (PRAC) is the committee that is responsible for assessing all aspects of the risk management of medicines for human use..',
        metas: ['05/03/2018 - 08/03/2018', 'PRAC'],
      },
      {
        variant: 'date',
        date: {
          week_day: 'Wed',
          day: '28',
          month: 'Feb',
        },
        title: 'Extraordinary Management Board meeting: 28 February 2018',
        href: '#listing-default-two-1',
        detail:
          'This extraordinary Management Board meeting is to consider the building approval process for EMA’s premises in Amsterdam. The Management Board is an integral governance body of the Agency. It has a supervisory role with general responsibility for budgetary and planning matters, the appointment of the Executive Director and the monitoring of the Agency’s performance..',
        metas: ['28/02/2018', 'MB'],
      },
      {
        variant: 'date',
        date: {
          week_day: 'Mon',
          day: '12',
          month: 'Feb',
        },
        title:
          'Submission of referentials management services (RMS) and organisations management services (OMS) change requests',
        href: '#listing-default-two-1',
        detail:
          'The European Medicines Agency’s (EMA) programme for substance, product, organisation and referential (SPOR) data services held a webinar with industry stakeholders to summarise the milestones and impacts on industry of the referentials management services (RMS) and organisations management services (OMS). The webinar focused on the submission of RMS and OMS change requests relating to referential and organisation data..',
        metas: ['12/02/2018', 'EMA'],
      },
      {
        variant: 'date',
        date: {
          week_day: 'Tue-Fri',
          day: '14-15',
          month: 'Dec',
        },
        title:
          'Workshop on site and histology - Independent indications in oncology',
        href: '#listing-default-two-1',
        detail:
          'Biological drivers that define cancer course across anatomical sites and histologies offer an opportunity to select populations sensitive to specific drugs based on those drivers, independently of the specific site or histology. This workshop aims to provide an exchange of views from different stakeholders about situations where a site and histology-independent clinical development might be a viable option and the associated challenges in terms of drug development, benefit-risk evaluation and health-technology assessment..',
        metas: ['14/12/2017 - 15/12/2017', 'CHMP'],
      },
    ],
    items_how_ema_work: [
      {
        title: 'How we regulate pharmaceutical research and development',
        href: '#list-item-4',
      },
      {
        title: 'Our role in authorisation of medicines in the EU',
        href: '#list-item-4',
      },
      {
        title: 'How the safety of medicines is monitored and controlled',
        href: '#list-item-4',
      },
      {
        title: 'Who are EMAs scientific experts?',
        href: '#list-item-4',
      },
      {
        title: 'Ensuring independence and transparency',
        href: '#list-item-4',
      },
      {
        title: 'Another one',
        href: '#list-item-4',
      },
    ],
    items_key_content: [
      {
        title: 'CHMP highlights, December 2012',
        href: '#list-item-4',
      },
      {
        title: 'Guidance for good clinical practice',
        href: '#list-item-4',
      },
      {
        title: 'European Public Assessment Reports(Human)',
        href: '#list-item-4',
      },
      {
        title: 'European Public Assessment Reports(Veterinary)',
        href: '#list-item-4',
      },
      {
        title: 'Pharmacovigilance legislation',
        href: '#list-item-4',
      },
    ],
    items_services: [
      {
        title: 'Suspected ADR reports',
        href: '#list-item-4',
      },
      {
        title: 'EU Clinical Trials Register',
        href: '#list-item-4',
      },
      {
        title: 'eSubmission services',
        href: '#list-item-4',
      },
      {
        title: 'U Telematics services',
        href: '#list-item-4',
      },
    ],
    items_area: [
      {
        variant: 'highlight',
        title: 'Medicine and emerging science',
        href: '#list-item-4',
        primary_image: {
          src: 'https://picsum.photos/200/200',
          alt: 'Highlighted image',
        },
      },
      {
        variant: 'highlight',
        title: 'EU clinical trials register',
        href: '#list-item-4',
        primary_image: {
          src: 'https://picsum.photos/200/200',
          alt: 'Highlighted image',
        },
      },
      {
        variant: 'highlight',
        title: 'Medicine for children',
        href: '#list-item-4',
        primary_image: {
          src: 'https://picsum.photos/200/200',
          alt: 'Highlighted image',
        },
      },
      {
        variant: 'highlight',
        title: 'Medicine for older people',
        href: '#list-item-4',
        primary_image: {
          src: 'https://picsum.photos/200/200',
          alt: 'Highlighted image',
        },
      },
      {
        variant: 'highlight',
        title: 'Side effects reports',
        href: '#list-item-4',
        primary_image: {
          src: 'https://picsum.photos/200/200',
          alt: 'Highlighted image',
        },
      },
      {
        variant: 'highlight',
        title: 'FAQs about the agency',
        href: '#list-item-4',
        primary_image: {
          src: 'https://picsum.photos/200/200',
          alt: 'Highlighted image',
        },
      },
    ],
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
        ECL.initExpandables('.ecl-file__translations-toggle');
      });`,
    },
  },
};
