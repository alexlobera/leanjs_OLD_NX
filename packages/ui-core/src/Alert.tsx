import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Alert<T extends As = 'div'>(props: LeanProps<T>) {
  return (
    <Box
      {...props}
      sx={{
        my: 1,
        pl: 1,
        pr: 1,
        py: 3,
        ...(alertVariants[props.variant] || {}),
        ...(props.sx || {}),
      }}
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
