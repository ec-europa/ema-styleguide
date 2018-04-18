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
        href: '#content-slider-1',
        title: 'Labore nulla quis irure labore.',
        primary_image: {
          src: 'https://unsplash.it/640/280?image=222',
          alt: 'sky',
        },
      },
      {
        metas: ['message', 'market'],
        href: '#content-slider-2',
        title: 'Velit mollit in sunt dolor exercitation elit nostrud do.',
        primary_image: {
          src: 'https://unsplash.it/640/280?image=223',
          alt: 'street',
        },
      },
      {
        metas: ['content', 'dynamic'],
        href: '#content-slider-3',
        title: 'Cupidatat commodo reprehenderit excepteur esse.',
        primary_image: {
          src: 'https://unsplash.it/640/280?image=221',
          alt: 'buildings',
        },
      },
      {
        metas: ['management', 'team'],
        href: '#content-slider-4',
        title: 'Excepteur ex dolore.',
        primary_image: {
          src: 'https://unsplash.it/640/280?image=225',
          alt: 'tea',
        },
      },
    ],
  },
};
