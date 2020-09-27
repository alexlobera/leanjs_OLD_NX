import React from 'react';
import { Box, BoxProps, As } from './Box';

export const Container = React.forwardRef(function <T extends As>(
  props: BoxProps<T>,
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
}) as <T extends As = 'div'>(props: BoxProps<T>) => JSX.Element;

// const B = (props: F) => <Container ddd {...props} sx={{ m: 1 }} />;
// interface F {
//   test: boolean;
// }
// const B2 = (props: F) => <B {...props} test fff id="aad" onClick={(e) => {}} />;
