import React from 'react';
import { SVG } from '@leanjs/ui-core';
import { useTheme } from '@leanjs/ui-core';

const Tick = ({ width = 35, sx }) => {
  const {
    colors: { tech },
  } = useTheme();

  return (
    <SVG width={width} viewBox="0 0 35 27" sx={sx}>
      <polygon
        fill={tech}
        fill-rule="evenodd"
        points="0 14.825 3.773 9.937 13.851 18.323 30.413 0 35 4.148 14.494 27"
      />
    </SVG>
  );
};

export default Tick;
