import React from 'react';
import { Box, LeanProps, As } from './Box';

interface SVGProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
}

export function SVG<T extends As = 'svg'>({
  width,
  height,
  viewBox = '0 0 24 24',
  fill = 'currentcolor',
  ...rest
}: LeanProps<T, SVGProps>) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...rest}
    />
  );
}
