import React from 'react';
// import { Box, BoxProps } from '@leanjs/ui-core';
import { Box, BoxProps } from '../box';

// const textVariantProps = {
//   h1: {
//     fontSize: 7,
//   },
//   h2: {
//     fontSize: 6,
//   },
//   h3: {
//     fontSize: 5,
//   },
// };

// export const Heading = ({ variant, ...rest }) => (
//   <Box {...(variant && textVariantProps[variant])} {...rest} as={variant} />
// );
// Heading.defaultProps = {
//   variant: 'h1',
// };

export const P = ({ sx, as = 'p', ...rest }: BoxProps) => (
  <Box sx={{ mb: 2, ...sx }} as={as} {...rest} />
);
