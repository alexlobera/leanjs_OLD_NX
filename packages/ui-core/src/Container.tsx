import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Container = React.forwardRef(function <T extends As>(
  props: LeanProps<T>,
  ref
) {
  return (
    <Box
      ref={ref}
      variant="container"
      {...props}
      __sx={{
        width: '100%',
        maxWidth: 'container',
        mx: 'auto',
      }}
      __themeKey="layout"
    />
  );
});

// ❌
// const B = (props) => <Container ddd {...props} sx={{ m: 1 }} />;
