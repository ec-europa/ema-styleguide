module.exports = {
  title: 'Side Navigation',
  label: 'Side Navigation',
  status: 'ready',
  context: {
    list: [
      {
        label: 'Link 1',
        link: '#',
        list: [
          {
            label: 'Link 1-1',
            link: '#',
          },
          {
            label: 'Link 1-2',
            link: '#',
          },
          {
            label: 'Link 1-3',
            link: '#',
            list: [
              {
                label: 'Link 1-3-1',
                link: '#',
                list: [
                  {
                    label: 'Link 1-3-1-1',
                    link: '#',
                    active: true,
                    canExpand: true,
                  },
                  {
                    label: 'Link 1-3-1-2',
                    link: '#',
                  },
                ],
              },
              {
                label: 'Link 1-3-2',
                link: '#',
              },
              {
                label: 'Link 1-3-3',
                link: '#',
                canExpand: true,
              },
            ],
          },
        ],
      },
      {
        label: 'Link 2',
        link: '#',
      },
      {
        label: 'Link 3',
        link: '#',
        canExpand: true,
      },
      {
        label: 'Link 4',
        link: '#',
        canExpand: true,
      },
    ],
  },
};
