import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Image = React.forwardRef(function <T extends As = 'img'>(
  props: LeanProps<T>,
  ref
) {
  return <Box as="img" {...props} ref={ref} __sx={{ maxWidth: '100%' }} />;
});

// ❌ this fails since it doesnt fail even without spreading {...props}. -> React.forwardRef
// const B = (props) => <Image asss sx={{ m: 1 }} />;
