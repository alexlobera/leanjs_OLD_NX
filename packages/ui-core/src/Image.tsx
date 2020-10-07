import React from 'react';
import { Box, BoxProps, As } from './Box';

export const Image = React.forwardRef(function <T extends As = 'img'>(
  props: BoxProps<T>,
  ref
) {
  return <Box as="img" {...props} ref={ref} __sx={{ maxWidth: '100%' }} />;
}) as <T extends As = 'img'>(props: BoxProps<T>) => JSX.Element;

// interface P {
//   a: boolean;
// }
// const B = ({ a, ...rest }) => <Image {...rest} asss sx={{ m: 1 }} />;
