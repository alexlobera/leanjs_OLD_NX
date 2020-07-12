import React from 'react';
import { Box, BoxProps } from './Box';

const Flex = ({ sx, ...rest }: BoxProps) => (
  <Box sx={{ display: 'flex', ...sx }} {...rest} />
);

export default React.memo(Flex);
