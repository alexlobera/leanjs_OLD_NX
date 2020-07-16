import React, { FunctionComponent } from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { Link as LinkScroll, scroller } from 'react-scroll';
import { Box, LeanProps, As } from '../layout/Box';

import {
  FONT_FAMILY,
  FONT_SIZE_STANDARD,
  LINE_HEIGHT_STANDARD,
  FONT_WEIGHT_MEDIUMBOLD,
} from '../../config/styles';

export const ANCHOR_STYLE = (props) => `
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    font-size: ${props.inheritFontSize ? `inherit` : FONT_SIZE_STANDARD};
    font-weight: ${FONT_WEIGHT_MEDIUMBOLD};
    font-style: normal;
    line-height: ${LINE_HEIGHT_STANDARD};
    color: inherit;
    ${FONT_FAMILY}
`;

const BasicLink = styled.a`
  ${ANCHOR_STYLE};
`;

export const DEFAULT_SCROLL_DURATION = 500;

export const styleChildLinkColor = (color) => `
  a {
    color: ${color};
  }
  a:link {
    color: ${color};
  }
  a:visited {
    color: ${color};
  }
  a:hover {
    color: ${color};
  }
  a:active {
    color: ${color};
  }
`;

const RouterLink = styled(GatsbyLink)`
  ${ANCHOR_STYLE};
`;

interface LinkProps {
  to?: string;
  name?: string;
}

function Link<T extends As = 'a'>(props: LeanProps<T, LinkProps>) {
  const { to = '', children = '' } = props;

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substr(1);
      if (hash && hash === props.name) {
        // adds smooth scrolling to anchor links
        setTimeout(() => {
          scroller.scrollTo(hash, {
            smooth: true,
            duration: DEFAULT_SCROLL_DURATION,
            offset: 0,
          });
        }, 100);
      }
    }
  });

  if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    const { target = '_blank' } = props;
    return (
      <Box {...props} as={BasicLink} target={target} href={to} to={null}>
        {children}
      </Box>
    );
  } else if (to && to[0] === '#') {
    return (
      <Box {...props} as={ScrollingLink} to={to.substr(1)}>
        {children}
      </Box>
    );
  } else if (!to) {
    return (
      <Box as={BasicLink} {...props}>
        {children}
      </Box>
    );
  } else {
    // The destination URLs need to have trailing slashes for the Gatsby prefetching to happen
    const dest =
      to.slice(-1) === '/' || to.indexOf('?') > -1 || to.indexOf('#') > -1
        ? to
        : to + '/';

    return (
      <Box {...props} as={RouterLink} to={dest}>
        {children}
      </Box>
    );
  }
}

export const MailtoLink = (props) => (
  <a href={`mailto:${props.to}`}>
    {props.children ? props.children : props.to}
  </a>
);

export const ScrollingLink = styled((props) => {
  return <Box as={LinkScroll} {...{ smooth: true, duration: 500, ...props }} />;
})`
  ${ANCHOR_STYLE};
`;

export default Link;
