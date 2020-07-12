import React from 'react';
//import { Box, BoxProps } from '@leanjs/ui-core';
import { Box, BoxProps } from './Box';

interface AlertProps extends BoxProps {
  variant?: keyof typeof alertVariants;
}

export const Alert = ({
  variant = 'default',
  sx = {},
  ...rest
}: AlertProps) => (
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
