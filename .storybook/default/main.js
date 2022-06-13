const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('../base-conf');

module.exports = {
  addons: [
    path.resolve(__dirname, '../pugCode'),
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-postcss',
    'storypug'
  ],
  webpackFinal: (config) => {
    baseConf.resolve.alias["@conf"] = path.resolve(__dirname, './')
    return merge(config,baseConf);
  },
};
