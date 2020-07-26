import React from 'react';
import { SVG } from '@leanjs/ui-core';

export const PlayMedia = (props) => {
  const { fill = '#FFF' } = props;
  return (
    <SVG focusable="false" width={24} height={24} fill={fill} {...props}>
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z" />
    </SVG>
  );
};
