const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve:{
    alias:{
      '@':path.resolve(__dirname, '../'),
      '@stories':path.resolve(__dirname, '../stories/'),
    },
  },
  module:{
    rules:[
      {
        test: /\.s(c|a)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'import-glob-loader'
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
          'import-glob-loader'
        ],
        include: path.resolve(__dirname, '../'),
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
