import React from 'react';
import { Box, BoxProps, As } from './Box';

export const Flex = React.forwardRef(function <T extends As = 'div'>(
  props: BoxProps<T>,
  ref
) {
  const { sx = {} } = props;
  return <Box {...props} ref={ref} sx={{ display: 'flex', ...sx }} />;
}) as <E extends As = 'div'>(props: BoxProps<E>) => JSX.Element;

// ❌ this fails since it doesnt fail even without spreading {...props}. -> React.forwardRef
// const B = (props) => <Flex asss sx={{ m: 1 }} />;
