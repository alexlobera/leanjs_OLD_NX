import React from 'react';
import { SVG } from '@leanjs/ui-core';

export const PauseMedia = (props) => {
  const { fill = '#FFF' } = props;
  return (
    <SVG focusable="false" width={24} height={24} fill={fill} {...props}>
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5-10h-3v10h3v-10z" />
    </SVG>
  );
};
