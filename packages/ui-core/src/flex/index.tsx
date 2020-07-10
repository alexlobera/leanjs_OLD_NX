import React from 'react';
import { Box, BoxProps } from '../box';

const Flex = ({ sx, ...rest }: BoxProps) => (
  <Box sx={{ display: 'flex', ...sx }} {...rest} />
);

export default React.memo(Flex);
