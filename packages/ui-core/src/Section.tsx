import React from 'react';
import { Box, BoxProps, As } from './Box';

export function Section<T extends As = 'section'>(props: BoxProps<T>) {
  return (
    <Box
      as="section"
      {...props}
      __sx={{
        mt: 9,
        mb: 9,
        pl: 2,
        pr: 2,
        display: 'block',
      }}
      __themeKey="sections"
    />
  );
}
