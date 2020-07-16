import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Image = React.forwardRef(function <T extends As = 'img'>(
  props: LeanProps<T>,
  ref
) {
  const { sx = {} } = props;
  return (
    <Box
      {...props}
      ref={ref}
      as={props.as || 'img'}
      sx={{ maxWidth: '100%', ...sx }}
    />
  );
});

// ❌ this fails since it doesnt fail even without spreading {...props}. -> React.forwardRef
// const B = (props) => <Image asss sx={{ m: 1 }} />;
