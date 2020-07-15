import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Flex = React.forwardRef(function <T extends As = 'div'>(
  props: LeanProps<T>,
  ref
) {
  const { sx = {} } = props;
  return <Box {...props} ref={ref} sx={{ display: 'flex', ...sx }} />;
});

// ❌ this fails since it doesnt fail even without spreading {...props}. -> React.forwardRef
// const B = (props) => <Flex asss sx={{ m: 1 }} />;
