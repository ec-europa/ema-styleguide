const variants = require('./variants.json');

module.exports = {
  title: 'Buttons',
  label: 'Buttons',
  preview: '@preview-website',
  tags: ['atom'],
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--ema-h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants,
};
