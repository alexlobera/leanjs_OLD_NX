import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Container = React.forwardRef(function <T extends As>(
  props: LeanProps<T>,
  ref
) {
  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        width: '100%',
        maxWidth: 'container',
        mx: 'auto',
        ...(props.sx || {}),
      }}
    />
  );
});

// ❌
// const B = (props) => <Container ddd {...props} sx={{ m: 1 }} />;
