import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Container = React.forwardRef(function <T extends As>(
  props: LeanProps<T>,
  ref
) {
  const { sx = {}, variant } = props;

  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        ...(variant ? { variant: `containers.${variant}` } : {}),
        width: '100%',
        maxWidth: 'container',
        mx: 'auto',
        ...(sx || {}),
      }}
    />
  );
});

// ❌
// const B = (props) => <Container ddd {...props} sx={{ m: 1 }} />;
