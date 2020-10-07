import React from 'react';
import { Box, BoxProps, As, Flex } from '@leanjs/ui-core';

export function Card<T extends As = 'div'>({ children, ...rest }: BoxProps<T>) {
  return (
    <Box {...(rest as BoxProps<T>)}>
      {null}
      <Flex sx={{ shadow: 'thin' }}>
        <Box sx={{ bg: 'primary', height: '5px' }} />
        <Box sx={{ bg: 'secondary', height: '5px' }} />
        <Box sx={{ bg: 'tertiary', height: '5px' }} />
      </Flex>
    </Box>
  );
}

export default Card;
