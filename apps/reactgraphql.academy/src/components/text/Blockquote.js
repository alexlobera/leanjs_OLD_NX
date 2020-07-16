import React from 'react';
import Box from '../layout/Box';

const Blockquote = ({ sx = {}, children, ...rest }) => (
  <Box as="span" sx={{ fontStyle: 'italic', lineHeight: 4, ...sx }} {...rest}>
    "{children}"
  </Box>
);

export default Blockquote;
