import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Link<T extends As = 'a'>({
  sx,
  as = 'a',
  ...rest
}: LeanProps<T>) {
  return (
    <Box
      sdfgsdfg
      as="p"
      sx={{ mt: 1 }}
      variant="a"
      __themeKey="styles"
      {...rest}
    />
  );
}
