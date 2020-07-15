import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Alert<T extends As = 'div'>({
  variant = 'default',
  sx = {},
  ...rest
}: LeanProps<T>) {
  return (
    <Box
      sx={{
        my: 1,
        pl: 1,
        pr: 1,
        py: 3,
        ...(alertVariants[variant] || {}),
        ...sx,
      }}
      {...rest}
    />
  );
}

const alertVariants = {
  default: {
    border: '1px solid',
    bordercolor: 'text',
  },
  danger: {
    backgroundColor: 'danger',
    fontWeight: 'bold',
  },
};
