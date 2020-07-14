import React from 'react';
import { Box, LeanProps, As } from './Box';

export interface LinkProps {}

export function Link<T extends As = 'a'>({
  sx,
  as = 'a',
  ...rest
}: LeanProps<T, LinkProps>) {
  return <Box as={as} sx={sx} variant="a" __themeKey="styles" {...rest} />;
}
