import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Section<T extends As = 'section'>(props: LeanProps<T>) {
  return (
    <Box
      as="section"
      {...props}
      __sx={{
        pt: 7,
        pb: 7,
        pl: 1,
        pr: 1,
        display: 'block',
      }}
      __themeKey="sections"
    />
  );
}
