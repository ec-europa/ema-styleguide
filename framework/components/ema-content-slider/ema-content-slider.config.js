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
        metas: ['report', 'cell therapies'],
        href: '#content-slider-1',
        title: 'CAR T-cell therapy registries',
        detail:
          "EMA's new workshop report describes the opportunities and challenges in using patient registries for the benefit-risk evaluations of chimeric antigen receptor (CAR) T-cell therapies.",
        primary_image: {
          src: 'https://unsplash.it/640/480?image=221',
          alt: 'sky',
        },
      },
      {
        metas: ['video', 'about us'],
        href: '#content-slider-2',
        title: 'Working for every patient in Europe',
        detail:
          "Our new video explains EMA's role in enabling timely patient access to new medicines in Europe. Watch the video now.",
        primary_image: {
          src: 'https://unsplash.it/640/480?image=221',
          alt: 'street',
        },
      },
      {
        metas: ['report', 'about us'],
        href: '#content-slider-3',
        title: 'Annual report',
        detail:
          "Read about EMA's key achievements and figures in 2017, including statistics on its regulatory procedures, activities, trends and changes in recent years.",
        primary_image: {
          src: 'https://unsplash.it/640/480?image=221',
          alt: 'buildings',
        },
      },
      {
        metas: ['campaign', 'vaccine'],
        href: '#content-slider-4',
        title: 'European Immunization Week',
        detail:
          'EMA supports European Immunization Week from 23 to 29 April 2018. This World Health Organization initiative aims to increase vaccination coverage by raising awareness among parents and caregivers, health care professionals, policy and decision-makers, and the media.',
        primary_image: {
          src: 'https://unsplash.it/640/480?image=221',
          alt: 'tea',
        },
      },
    ],
  },
};
