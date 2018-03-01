module.exports = {
  title: 'Icons',
  label: 'Icons',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      <p class="ecl-u-d-flex ecl-u-align-items-center">\n
        <span class="ecl-u-mh-s">${markup}</span>\n
        ${item.label}\n
      </p>\n
      <!-- End: @${item.handle} -->\n`;
  },
  default: 'doi',
  context: {
    icon_path: '/framework/images/icons/ema-icons.svg',
  },
  variants: [
    {
      name: 'doi',
      label: 'doi',
      context: {
        icon: 'doi',
      },
    },
    {
      name: 'it-support',
      label: 'it-support',
      context: {
        icon: 'it-support',
      },
    },
    {
      name: 'sap',
      label: 'sap',
      context: {
        icon: 'sap',
      },
    },
    {
      name: 'arrow-down',
      label: 'arrow-down',
      context: {
        icon: 'arrow-down',
      },
    },
    {
      name: 'arrow-left',
      label: 'arrow-left',
      context: {
        icon: 'arrow-left',
      },
    },
    {
      name: 'arrow-right',
      label: 'arrow-right',
      context: {
        icon: 'arrow-right',
      },
    },
    {
      name: 'arrow-up',
      label: 'arrow-up',
      context: {
        icon: 'arrow-up',
      },
    },
    {
      name: 'booking',
      label: 'booking',
      context: {
        icon: 'booking',
      },
    },
    {
      name: 'calendar-datepicker',
      label: 'calendar-datepicker',
      context: {
        icon: 'calendar-datepicker',
      },
    },
    {
      name: 'close',
      label: 'close',
      context: {
        icon: 'close',
      },
    },
    {
      name: 'comment',
      label: 'comment',
      context: {
        icon: 'comment',
      },
    },
    {
      name: 'contact-point',
      label: 'contact-point',
      context: {
        icon: 'contact-point',
      },
    },
    {
      name: 'contact',
      label: 'contact',
      context: {
        icon: 'contact',
      },
    },
    {
      name: 'curriculum-vitae',
      label: 'curriculum-vitae',
      context: {
        icon: 'curriculum-vitae',
      },
    },
    {
      name: 'deadlines',
      label: 'deadlines',
      context: {
        icon: 'deadlines',
      },
    },
    {
      name: 'declaration',
      label: 'declaration',
      context: {
        icon: 'declaration',
      },
    },
    {
      name: 'desk',
      label: 'desk',
      context: {
        icon: 'desk',
      },
    },
    {
      name: 'discussion-board',
      label: 'discussion-board',
      context: {
        icon: 'discussion-board',
      },
    },
    {
      name: 'download',
      label: 'download',
      context: {
        icon: 'download',
      },
    },
    {
      name: 'e-mail',
      label: 'e-mail',
      context: {
        icon: 'e-mail',
      },
    },
    {
      name: 'excel',
      label: 'excel',
      context: {
        icon: 'excel',
      },
    },
    {
      name: 'facilities',
      label: 'facilities',
      context: {
        icon: 'facilities',
      },
    },
    {
      name: 'faq',
      label: 'faq',
      context: {
        icon: 'faq',
      },
    },
    {
      name: 'favourites',
      label: 'favourites',
      context: {
        icon: 'favourites',
      },
    },
    {
      name: 'featured-topics',
      label: 'featured-topics',
      context: {
        icon: 'featured-topics',
      },
    },
    {
      name: 'group',
      label: 'group',
      context: {
        icon: 'group',
      },
    },
    {
      name: 'home',
      label: 'home',
      context: {
        icon: 'home',
      },
    },
    {
      name: 'info',
      label: 'info',
      context: {
        icon: 'info',
      },
    },
    {
      name: 'link-ext',
      label: 'link-ext',
      context: {
        icon: 'link-ext',
      },
    },
    {
      name: 'list-view',
      label: 'list-view',
      context: {
        icon: 'list-view',
      },
    },
    {
      name: 'minus',
      label: 'minus',
      context: {
        icon: 'minus',
      },
    },
    {
      name: 'mobile-phone',
      label: 'mobile-phone',
      context: {
        icon: 'mobile-phone',
      },
    },
    {
      name: 'news',
      label: 'news',
      context: {
        icon: 'news',
      },
    },
    {
      name: 'opinion',
      label: 'opinion',
      context: {
        icon: 'opinion',
      },
    },
    {
      name: 'organizational-structure',
      label: 'organizational-structure',
      context: {
        icon: 'organizational-structure',
      },
    },
    {
      name: 'pdf',
      label: 'pdf',
      context: {
        icon: 'pdf',
      },
    },
    {
      name: 'phone',
      label: 'phone',
      context: {
        icon: 'phone',
      },
    },
    {
      name: 'play',
      label: 'play',
      context: {
        icon: 'play',
      },
    },
    {
      name: 'plus',
      label: 'plus',
      context: {
        icon: 'plus',
      },
    },
    {
      name: 'powerpoint',
      label: 'powerpoint',
      context: {
        icon: 'powerpoint',
      },
    },
    {
      name: 'related-applications',
      label: 'related-applications',
      context: {
        icon: 'related-applications',
      },
    },
    {
      name: 'related-documents',
      label: 'related-documents',
      context: {
        icon: 'related-documents',
      },
    },
    {
      name: 'related-links',
      label: 'related-links',
      context: {
        icon: 'related-links',
      },
    },
    {
      name: 'reply',
      label: 'reply',
      context: {
        icon: 'reply',
      },
    },
    {
      name: 'search',
      label: 'search',
      context: {
        icon: 'search',
      },
    },
    {
      name: 'select',
      label: 'select',
      context: {
        icon: 'select',
      },
    },
    {
      name: 'settings',
      label: 'settings',
      context: {
        icon: 'settings',
      },
    },
    {
      name: 'share',
      label: 'share',
      context: {
        icon: 'share',
      },
    },
    {
      name: 'subscribe',
      label: 'subscribe',
      context: {
        icon: 'subscribe',
      },
    },
    {
      name: 'training-courses',
      label: 'training-courses',
      context: {
        icon: 'training-courses',
      },
    },
    {
      name: 'twitter',
      label: 'twitter',
      context: {
        icon: 'twitter',
      },
    },
    {
      name: 'word',
      label: 'word',
      context: {
        icon: 'word',
      },
    },
    {
      name: 'zip',
      label: 'zip',
      context: {
        icon: 'zip',
      },
    },
  ],
};
