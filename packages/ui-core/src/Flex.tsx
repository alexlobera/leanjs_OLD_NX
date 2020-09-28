import React from 'react';
import { Box, BoxProps, As } from './Box';

export const Flex = React.forwardRef(function <T extends As = 'div'>(
  props: BoxProps<T>,
  ref
) {
  const { sx = {} } = props;
  return <Box {...props} ref={ref} sx={{ display: 'flex', ...sx }} />;
}) as <T extends As = 'div'>(props: BoxProps<T>) => JSX.Element;

// interface P {
//   a: boolean;
// }
// const B = ({ a, ...rest }: P) => <Flex {...rest} asss sx={{ m: 1 }} />;
