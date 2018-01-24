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
    lang_selector: {
      id: 'language-selector',
      name: 'language-selector',
      options: [
        {
          value: 'en',
          label: 'English (en)',
        },
        {
          value: 'fr',
          label: 'français (fr)',
        },
        {
          value: 'it',
          label: 'Italiano (it)',
        },
      ],
    },
  },
};
