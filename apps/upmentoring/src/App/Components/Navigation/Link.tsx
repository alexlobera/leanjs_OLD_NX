import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, Route } from 'react-router-dom';
import { Link as DefaultLinkScroll } from 'react-scroll';

import Box, { BoxProps } from '../Layout/Box';
import { StyledButton, buttonDefaultProps } from '../Buttons/Button';
import colors from '../../Config/colors';

export const DEFAULT_SCROLL_OFFSET = 0;

interface LinkScrollProps {
  to: string;
}

export interface LinkProps extends BoxProps {
  onClick?: any;
  target?: any;
  button?: any;
  disabled?: boolean;
  to?: any;
  href?: any;
  variant?: any;
  className?: string;
}

export const StyledLink = styled(Box)`
  color: ${(props) => (props.white ? `white` : `${colors.GREY_DARK};`)};
  ${({ onClick }) => onClick && `cursor: pointer;`}
`;

const LinkScroll: React.FunctionComponent<LinkScrollProps> = ({
  to,
  ...rest
}) => (
  <DefaultLinkScroll
    smooth={true}
    duration={500}
    offset={DEFAULT_SCROLL_OFFSET}
    to={to && to.slice(1, to.length)}
    {...rest}
  />
);

function removeTrailingSlash(url: string) {
  return url ? url.replace(/\/$/, '') : '';
}

const Link: React.FunctionComponent<LinkProps> = ({
  button = false,
  disabled,
  to: rawTo = '',
  children = '',
  ...rest
}) => {
  const to = disabled ? undefined : rawTo;
  const toHref = disabled ? undefined : to || rest.href;
  const GenericLink = button ? StyledButton : StyledLink;
  const buttonProps = button ? buttonDefaultProps : {};
  const extendedProps = {
    ...rest,
    ...buttonProps,
    disabled,
    role: button ? 'button' : undefined,
  };

  if (toHref && toHref.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    const { target = '_blank' } = rest;

    return (
      <GenericLink {...extendedProps} box="a" target={target} href={toHref}>
        {children}
      </GenericLink>
    );
  } else if (to && to[0] === '#') {
    const { onClick, ...restLinkScrollProps } = extendedProps;

    return (
      <Route
        render={({ history }) => (
          <GenericLink
            {...restLinkScrollProps}
            box={LinkScroll}
            onClick={() => {
              history.push(to);
              onClick && onClick();
            }}
            to={to}
          >
            {children}
          </GenericLink>
        )}
      />
    );
  } else if (!to) {
    return (
      <GenericLink {...extendedProps} box="a">
        {children}
      </GenericLink>
    );
  } else {
    const dest = removeTrailingSlash(to);

    return (
      <GenericLink {...extendedProps} box={RouterLink} to={dest}>
        {children}
      </GenericLink>
    );
  }
};

export default Link;
