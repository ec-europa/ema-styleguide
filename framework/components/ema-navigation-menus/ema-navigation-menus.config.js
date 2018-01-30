module.exports = {
  title: 'Navigation menus',
  label: 'Navigation menus',
  status: 'ready',
  tags: ['organism'],
  context: {
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
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
      });`,
    },
  },
};
