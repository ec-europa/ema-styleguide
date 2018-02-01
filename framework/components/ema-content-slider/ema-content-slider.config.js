module.exports = {
  title: 'Content slider',
  label: 'Content slider',
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.contentSlider();
      });`,
    },
    list: [
      {
        metas: ['data', 'cluster'],
        href: '#',
        title: 'Labore nulla quis irure labore.',
        primary_image: {
          src: 'https://unsplash.it/640/480?image=222',
          alt: 'sky',
        },
      },
      {
        metas: ['message', 'market'],
        href: '#',
        title: 'Velit mollit in sunt dolor exercitation elit nostrud do.',
        primary_image: {
          src: 'https://unsplash.it/640/480?image=223',
          alt: 'street',
        },
      },
      {
        metas: ['content', 'dynamic'],
        href: '#',
        title: 'Cupidatat commodo reprehenderit excepteur esse.',
        primary_image: {
          src: 'https://unsplash.it/640/480?image=221',
          alt: 'buildings',
        },
      },
      {
        metas: ['management', 'team'],
        href: '#',
        title: 'Excepteur ex dolore.',
        primary_image: {
          src: 'https://unsplash.it/640/480?image=225',
          alt: 'tea',
        },
      },
    ],
  },
};
