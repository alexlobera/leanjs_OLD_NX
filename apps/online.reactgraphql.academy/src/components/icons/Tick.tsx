import React from 'react';
import { SVG } from '@leanjs/ui-core';
import { useTheme } from '@leanjs/ui-core';

import { Theme } from '../../config/theme';

interface Props {
  width?: number;
  sx?: any;
  color?: string;
}
export default function Tick({ width, sx, color }: Props) {
  const {
    colors: { tech },
  } = useTheme() as Theme;

  return (
    <SVG width={width} viewBox="0 0 35 27" sx={sx}>
      <polygon
        fill={color || tech}
        fill-rule="evenodd"
        points="0 14.825 3.773 9.937 13.851 18.323 30.413 0 35 4.148 14.494 27"
      />
    </SVG>
  );
}
