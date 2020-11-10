import React from 'react';
export { formatUTC } from '@leanjs/ui-academy';
import BlockContent from '@sanity/block-content-to-react';

import { H2, H3, H4, H5, P, Span } from './components/display';
import { Ul, Li } from './components/layout';

export function getBlockContent(blocks) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}

export const serializers = {
  marks: {
    // link: ({ mark: { href }, children }) => (
    //   <BlogPostLink to={href} children={children} />
    // ),
    // internalLink: ({ mark = {}, children }) => {
    //   return (
    //     <BlogPostLink to={internalLinkTo({ mark })}>{children}</BlogPostLink>
    //   );
    // },
  },
  list: ({ children }) => <Ul children={children} />,
  listItem: ({ children = {} }) => <Li children={children} />,
  hardBreak: null,
  types: {
    block: ({ children, node }) => {
      const style = node.style || 'normal';
      let formatedChildren;
      switch (style) {
        case 'h2':
          return <H2 children={children} />;
        case 'h3':
          return <H3 children={children} />;
        case 'h4':
          return <H4 children={children} />;
        case 'h5':
          return <H5 children={children} />;
        // case 'blockquote':
        //   return <Blockquote children={children} />;
        default:
          formatedChildren =
            children &&
            children.reduce &&
            children.reduce((acc, curr) => {
              const element = removeCarriageReturn(curr);
              if (element) {
                acc.push(element);
              }

              return acc;
            }, []);

          return formatedChildren && formatedChildren.length ? (
            <P children={formatedChildren} />
          ) : null;
      }
    },
    span: ({ node }) => <Span children={node.children} />,
  },
};

function removeCarriageReturn(text) {
  if (text && typeof text === 'string') {
    return text.replace(/[\n\r]+/g, '');
  } else {
    return text;
  }
}
