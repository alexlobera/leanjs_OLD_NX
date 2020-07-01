import React from 'react';
import Box from '../layout/Box';
import { DARK_GREY } from '../../config/styles';

export const Price = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      fontWeight: 'bold',
      color: DARK_GREY,
      display: 'inline-block',
      fontSize: 6,
      ...sx,
    }}
    box="span"
    {...rest}
  />
);

export default Price;
