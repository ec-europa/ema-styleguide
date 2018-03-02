const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist/framework' : 'static/framework';

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'framework/index.js'),
      dest: path.resolve(__dirname, outputFolder, 'scripts/ema.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'framework/index.scss'),
      dest: path.resolve(__dirname, outputFolder, 'styles/ema.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(__dirname, 'node_modules/@ec-europa/ecl-logos/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        'node_modules/@ec-europa/ecl-forms-selects/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, 'node_modules/@ec-europa/ecl-icons/fonts'),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
    {
      from: path.resolve(__dirname, 'framework/components/ema-footers/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, 'framework/components/ema-headers/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, 'framework/content/ema-icons/sprite'),
      to: path.resolve(__dirname, outputFolder, 'images/icons'),
    },
  ],
};
