# storybook_html_pugdev

a development environment by pug for [storybook for html]

[Demo](https://bigfly3.github.io/storybook_html_pugdev/)

- Automatically import [tree-title.stories.pug] to [/path/to/tree-title] without writing javascript.
- sass and stylus under the stories folder are automatically imported.
- Display pug and html source in add-on panel and copy.
- Knobs and testing can be written in stories.js by making pug's mixin a component.
- Enabled to embed pug's common variables for each environment by using config.

## Installation

    npm i


## npm script
development

    npm run storybook 

【build】config → .storybook/default　output-dir → public  

    npm run build

【build2】config → .storybook/second　output-dir → docs  
// for github pages

    npm run build2

## Components made with pug mixin

Please refer to the following link and [demo](https://bigfly3.github.io/storybook_html_pugdev/)

- [storypug](https://www.npmjs.com/package/storypug)
-  [Component Driven Development for Static Deliverables: A Retrospective](https://standard.shiftbrain.com/blog/cdd-for-static-deliverables-en)


## Pug's Source View Add-on

【 .stories.pug 】→ Automatically import.  
【 .stories.js 】→ Set path from /stories/~

```javascript
  //csf
  export const Default = () => {/../}
  Default.parameters = { pugCode: 'Examples/Media/Media.pug' }

  //storiesOf
  storiesOf('Examples/Media',modules)
  .add(
    'Media',
    () => {/../},
    {
      pugCode:'Examples/Media/Media.pug'
    })
```

Hot reload does not work for this panel. Please reload if you want to update.


## Pug's common variables
Can be set with config.  
→ /.storybook/(default)/pug-data.js

```javascript
//Pug's common variables
module.exports = {
  imgDir:"/images/"
}
```

【 .stories.pug 】→ Automatically import.  
【 .stories.js 】→ Import pug-data.js and set it to renderer()


```javascript
import { renderer } from 'storypug'
import pugData from '@conf/pug-data'
const { html } = renderer(pugData)
```

