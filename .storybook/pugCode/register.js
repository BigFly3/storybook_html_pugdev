import React, { Fragment } from 'react';
import { AddonPanel } from '@storybook/components';
import { useParameter } from "@storybook/api";
import { addons, types } from '@storybook/addons';

import SyntaxHighlighter from '@whitespace/storybook-addon-html/lib/SyntaxHighlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';

export const PugCode = () => {
  const file = useParameter("pugCode", '');

  if (file === '') {
    return null;
  }
  let pug
  try {
    pug = require(`!html-loader!../../stories/${file}`);;
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
  }

  return (
    <Fragment>
      {pug ? (
      <SyntaxHighlighter
        language={'pug'}
        copyable={true}
        padded={true}
        style={style}
      >
        {pug}
      </SyntaxHighlighter>
      ) : null}
    </Fragment>
  );
};

addons.register("my-addon/pug-code", () => {
  addons.add("pug-code/panel", {
    title: 'Pug',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <PugCode />
      </AddonPanel>
    ),
  });
});
