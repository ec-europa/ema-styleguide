module.exports = {
  title: 'List items',
  label: 'List items',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n`;
  },
  default: 'pdf',
  variants: [
    {
      name: 'pdf',
      label: 'PDF list item',
      context: {
        title:
          'Title of the document <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(pdf - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        extra_classes: 'ecl-list-item--ema-pdf',
      },
    },
    {
      name: 'doc',
      label: 'DOC list item',
      context: {
        title:
          'Title of the document <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(doc - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        extra_classes: 'ecl-list-item--ema-doc',
      },
    },
    {
      name: 'xls',
      label: 'XLS list item',
      context: {
        title:
          'Title of the document <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(xls - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        extra_classes: 'ecl-list-item--ema-xls',
      },
    },
    {
      name: 'ppt',
      label: 'PPT list item',
      context: {
        title:
          'Title of the document <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(ppt - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        extra_classes: 'ecl-list-item--ema-ppt',
      },
    },
    {
      name: 'zip',
      label: 'ZIP list item',
      context: {
        title:
          'Title of the document <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(zip - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        extra_classes: 'ecl-list-item--ema-zip',
      },
    },
  ],
};
