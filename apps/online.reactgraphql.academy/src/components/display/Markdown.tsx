import MarkdownToJsx from 'markdown-to-jsx';
import React from 'react';

import { P } from '.';
import { Ul, Li } from '../layout';

export default function Markdown({ children }) {
  if (!children || typeof children !== 'string') {
    return null;
  }
  return (
    <MarkdownToJsx
      options={{
        overrides: {
          p: {
            component: P,
          },
          ul: {
            component: Ul,
          },
          li: {
            component: Li,
          },
        },
      }}
      children={children}
    />
  );
}
