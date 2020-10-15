import React from 'react';
import { Box, BoxProps, As, Flex } from '@leanjs/ui-core';

const cardVariants = {
  secondary: {
    pl: [1, 6],
    pr: [1, 6],
    pt: [1, 6],
    pb: [1, 6],
    border: `2px solid`,
    borderColor: 'secondary',
  },
};

export function Card<T extends As = 'div'>({
  children,
  sx,
  variant,
  ...rest
}: BoxProps<T>) {
  return (
    <Flex
      sx={{
        ...(cardVariants[variant] || {}),
        ...sx,
        boxShadow: 'thin',
        flexDirection: 'column',
        position: 'relative',
      }}
      {...(rest as BoxProps<T>)}
    >
      {children}
      {variant === 'primary' && (
        <Flex sx={{ position: 'absolute', width: '100%', bottom: '-5px' }}>
          <Box sx={{ bg: 'secondary', height: '5px', flex: 1 }} />
          <Box sx={{ bg: 'tertiary', height: '5px', flex: 1 }} />
          <Box sx={{ bg: 'primary', height: '5px', flex: 1 }} />
        </Flex>
      )}
    </Flex>
  );
}

export default Card;
