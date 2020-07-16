import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { getVariantProps } from '../utils';

const StyledUl = styled(Box)`
  ${({ variant, variants = [] }) =>
    (variant === 'unstyled' || variants.find((v) => v === 'unstyled')) &&
    `
    list-style-type: none;
  `};
  ${({ variant, variants = [] }) =>
    (variant === 'inline' || variants.find((v) => v === 'inline')) &&
    `
    > li {
      padding: 8px:
      margin: 0;
      display: inline-block;
      :first-child {
        padding-left: 0;
      }
      :last-child {
        padding-right: 0;
      }
    }
  `};
`;

const Ul = ({ sx = {}, children, ...rest }) => (
  <StyledUl
    box="ul"
    sx={{
      mt: 0,
      ...getVariantProps(rest.variant || rest.variants, ulVariantSxProp),
      ...sx,
    }}
    {...rest}
    children={React.Children.map(children, (child) =>
      child && typeof child === 'object'
        ? React.cloneElement(child, {
            variant: rest.variant,
            variants: rest.variants,
          })
        : child
    )}
  />
);

const Ol = (props) => <Ul box="ol" {...props} />;

const ulVariantSxProp = {
  inline: {
    m: 0,
    p: 0,
  },
  unstyled: {
    ml: 0,
    pl: 0,
    '> li': {
      mb: '7px',
    },
  },
};

const Li = ({ sx = {}, ...rest }) => (
  <Box
    box="li"
    sx={{
      mb: 2,
      ...sx,
    }}
    {...rest}
  />
);

export { Ul, Ol, Li };
export default Ul;
