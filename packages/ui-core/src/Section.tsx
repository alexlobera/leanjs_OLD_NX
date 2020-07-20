import React from 'react';
import { Box, LeanProps, As } from './Box';

export function Section<T extends As = 'section'>(props: LeanProps<T>) {
  const { sx = {}, variant } = props;
  const variantStyles = {
    pt: 7,
    pb: 7,
    display: 'block',
    ...(variant ? { variant: `sections.${variant}` } : {}),
  };
  return (
    <Box
      as="section"
      {...props}
      sx={{
        ...variantStyles,
        ...sx,
      }}
    />
  );
}
