import React from 'react';

import { getVariantProps } from './utils';
import { Box, BoxProps, As } from './Box';

const defaultPadding = {
  pl: [1, 4],
  pr: [1, 4],
  pt: [1, 4],
  pb: [1, 4],
};

const cardVariants = {
  primary: {
    borderWidth: `3px`,
    borderStyle: 'solid',
    borderColor: 'primary',
    ...defaultPadding,
  },
  secondary: {
    borderWidthLeft: `3px`,
    borderLeftStyle: 'solid',
    borderLeftColor: 'secondary',
    pl: [2, 4],
  },
  tertiary: {
    borderWidth: `3px`,
    borderStyle: 'solid',
    borderColor: 'tertiary',
    ...defaultPadding,
  },
  default: {
    boxShadow: 'box',
    backgroundColor: 'background',
    ...defaultPadding,
  },
};

export function Card<T extends As = 'div'>(props: BoxProps<T>) {
  return (
    <Box
      {...props}
      __themeKey="cards"
      __sx={{
        position: 'relative',
        ...getVariantProps(props.variant, cardVariants),
        ...(props.sx || {}),
      }}
    />
  );
}

Card.displayName = 'Card';

export default React.memo(Card);
