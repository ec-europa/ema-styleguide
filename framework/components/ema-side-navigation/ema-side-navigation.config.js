module.exports = {
  title: 'Side Navigation',
  label: 'Side Navigation',
  status: 'ready',
  context: {
    list: [
      {
        label: 'Link 1',
        link: 'http://google.be',
        list: [
          {
            label: 'Link 1-1',
            link: 'http://google.be',
          },
          {
            label: 'Link 1-2',
            link: 'http://google.be',
          },
          {
            label: 'Link 1-3',
            link: 'http://google.be',
            list: [
              {
                label: 'Link 1-3-1',
                link: 'http://google.be',
                list: [
                  {
                    label: 'Link 1-3-1-1',
                    link: 'http://google.be',
                  },
                ],
              },
              {
                label: 'Link 1-3-2',
                link: 'http://google.be',
              },
            ],
          },
        ],
      },
      {
        label: 'Link 2',
        link: 'http://google.be',
      },
      {
        label: 'Link 3',
        link: 'http://google.be',
      },
    ],
    _demo: {
      scripts: `
        ECL.initExpandables();
      `,
    },
  },
};
