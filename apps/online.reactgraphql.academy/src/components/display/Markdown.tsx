import MarkdownToJsx from 'markdown-to-jsx';
import React from 'react';

import { P, Span } from '.';
import { Ul, Li } from '../layout';
import Link from '../navigation/Link';

export default function Markdown({ children, li = Li }) {
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
          li,
          a: {
            component: Link,
          },
          span: {
            component: Span,
          },
        },
      }}
      children={children}
    />
  );
}
