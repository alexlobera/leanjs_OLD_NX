import React from 'react';
import { Box, BoxProps } from './Box';

export const Flex = ({ sx, ref, ...rest }: BoxProps) => (
  <Box sx={{ display: 'flex', ...sx }} {...rest} />
);
