import { configure, storiesOf ,addParameters,addDecorator} from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';
addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
    },
  })
);

import "../components.scss"
import "../components.styl"

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

import { renderer } from 'storypug'
const pugData = require(`@conf/pug-data.js`)
const { html } = renderer(pugData)

const path = require('path')
const pugContext = require.context('@stories', true, /\.stories\.pug$/);
pugContext.keys().forEach(function(pathStr) {
  const ext = path.extname(pathStr)
  const dirName = path.dirname(pathStr) !== '.' ? path.dirname(pathStr).replace('./','') : 'Others'
  const filePath = path.dirname(pathStr) !== '.' ? `${dirName}/${path.basename(pathStr)}` : path.basename(pathStr)
  const fileName = path.basename(pathStr.replace('.stories',''),`${ext}`)
  const pugSrc = require(`@stories/${filePath}`);
  storiesOf( dirName , module)
    .add( fileName , () => html(pugSrc)
    ,{
      pugCode: [pathStr.replace('./','')]
    })
});

configure([
  pugContext,
  require.context('@stories', true, /\.stories\.js$/)
], module);
