import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Tag<T extends As = 'span'>(props: LeanProps<T>) {
  return (
    <Box
      as="span"
      {...props}
      __themeKey="display"
      __sx={{
        p: '2px 8px',
        m: '4px 0',
        borderRadius: '5px',
        backgroundColor: 'secondary',
        color: `inverseText`,
        fontSize: 1,
        display: 'inline-block',
      }}
    />
  );
}
