import React from 'react';
import { Box } from '@leanjs/ui-core';
// import { DARK_GREY } from '../../config/styles';

export const Price = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      fontWeight: 'bold',
      color: 'text',
      display: 'inline-block',
      fontSize: 6,
      ...sx,
    }}
    as="span"
    {...rest}
  />
);

export default Price;
