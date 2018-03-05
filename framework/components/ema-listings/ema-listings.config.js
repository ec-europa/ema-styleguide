module.exports = {
  title: 'Listings',
  label: 'Listings',
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.initExpandables('#translations-expand-button');
      });`,
    },
    items: [
      {
        title:
          'Checklist for sponsors applying for the transfer of orphan medicinal product designation <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(pdf - 230kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 15/01/2009<br />Updated 13/11/2017</small></div>',
        extra_classes: 'ecl-list-item--ema-pdf',

        translations: [
          { title: 'Titre du fichier', meta: '230 kB - pdf - 4 pages' },
          { title: 'Dateititel', meta: '230 kB - pdf - 4 pages' },
          { title: 'Файл Заглавие', meta: '230 kB - pdf - 4 pages' },
        ],
        translations_label: 'Available languages (3)',
        translations_tooltip: 'Click to see translations',
      },
      {
        title:
          'Template 1 - Orphan designation transfer form <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(doc - 512kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 13/04/2016<br />Updated 13/12/2016</small></div>',
        extra_classes: 'ecl-list-item--ema-doc',
      },
      {
        title:
          'Template 2 - Translations of the active ingredient and indication for transfer of orphan-medicinal-product designation <small class="ema-u-color-grey-2 ecl-list-item__title--normal">(docx - 132kb)</small>',
        detail:
          '<div class="ema-u-color-grey-2"><small>Published 24/11/2008<br />Updated 04/07/2013</small></div>',
        extra_classes: 'ecl-list-item--ema-doc',
      },
    ],
  },
};
