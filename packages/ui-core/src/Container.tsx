import React from 'react';
import { Box, LeanProps, As } from './Box';

export const Container = React.forwardRef(
  <T extends As>({ sx = {}, ...rest }: LeanProps<T>, ref) => (
    <Box
      ref={ref}
      {...rest}
      sx={{
        width: '100%',
        maxWidth: 'container',
        mx: 'auto',
        ...sx,
      }}
    />
  )
);
