const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('../base-conf');

module.exports = {
  addons: [
    path.resolve(__dirname, '../pugCode'),
    '@whitespace/storybook-addon-html',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-postcss',
    'storypug'
  ],
  stories: [
    '../../stories/**/*.stories.pug',
    '../../stories/**/*.stories.js'
  ],
  webpackFinal: (config) => {
    baseConf.resolve.alias["@conf"] = path.resolve(__dirname, './')
    return merge(config,baseConf);
  },
};
