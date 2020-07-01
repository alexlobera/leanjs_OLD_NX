import React, { FunctionComponent } from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { Link as LinkScroll, scroller } from 'react-scroll';
import { Box, BoxProps } from '../layout/Box';

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
  href?: string;
  name?: string;
  target?: string;
}

const Link: FunctionComponent<LinkProps> = ({
  to = '',
  children = '',
  ...rest
}) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substr(1);
      if (hash && hash === rest.name) {
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
    const { target = '_blank' } = rest;
    return (
      <BasicLink {...rest} target={target} href={to}>
        {children}
      </BasicLink>
    );
  } else if (to && to[0] === '#') {
    return (
      <ScrollingLink to={to.substr(1)} {...rest}>
        {children}
      </ScrollingLink>
    );
  } else if (!to) {
    return <BasicLink {...rest}>{children}</BasicLink>;
  } else {
    // The destination URLs need to have trailing slashes for the Gatsby prefetching to happen
    const dest =
      to.slice(-1) === '/' || to.indexOf('?') > -1 || to.indexOf('#') > -1
        ? to
        : to + '/';

    return (
      <RouterLink {...rest} to={dest}>
        {children}
      </RouterLink>
    );
  }
};

export const MailtoLink = (props) => (
  <a href={`mailto:${props.to}`}>
    {props.children ? props.children : props.to}
  </a>
);

export const ScrollingLink = styled((props) => {
  return <LinkScroll {...{ smooth: true, duration: 500, ...props }} />;
})`
  ${ANCHOR_STYLE};
`;

interface LinkBoxProps extends LinkProps, BoxProps {
  className?: string;
}

const LinkBox = ({ box = Link, ...rest }: LinkBoxProps) => (
  <Box box={box} {...rest} />
);
export default LinkBox;
