import React from 'react';
import { Box, BoxProps } from './Box';

interface SVG extends BoxProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
}

export const SVG = ({
  width,
  height,
  viewBox = '0 0 24 24',
  fill = 'currentcolor',
  ...rest
}: SVG) => (
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
