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
      asdf
      {...props}
      __sx={{
        width: '100%',
        maxWidth: 'container',
        mx: 'auto',
      }}
      __themeKey="layout"
    />
  );
}) as <E extends As = 'div'>(props: BoxProps<E>) => JSX.Element;

// const B = (props: F) => <Container ddd {...props} sx={{ m: 1 }} />;
// interface F {
//   test: boolean;
// }
// const B2 = (props: F) => (
//   <Container {...props} fff id="aad" onClick={(e) => {}} />
// );
