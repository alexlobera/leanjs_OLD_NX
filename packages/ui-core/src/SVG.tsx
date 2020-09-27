import React from 'react';
import { Box, BoxProps, As } from './Box';

interface SVGProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
}

export function SVG<T extends As = 'svg'>(props: BoxProps<T, SVGProps>) {
  const { width, height, viewBox = '0 0 24 24', fill = 'currentcolor' } = props;
  return (
    <Box
      {...props}
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
    />
  );
}
