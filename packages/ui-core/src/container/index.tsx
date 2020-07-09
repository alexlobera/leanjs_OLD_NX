import React from 'react';
import { Box, BoxProps } from '../box';

export const Container = React.forwardRef(
  ({ sx = {}, ...rest }: BoxProps, ref) => (
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
