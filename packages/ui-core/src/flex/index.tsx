import React from 'react';
import { Box } from '../box';

const Flex = ({ sx, ...rest }) => (
  <Box sx={{ display: 'flex', ...sx }} {...rest} />
);

export default React.memo(Flex);
