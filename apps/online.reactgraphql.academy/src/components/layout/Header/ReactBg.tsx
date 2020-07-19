import React from 'react';

import { HeaderBgImage, BackgroundImageProps } from '.';
import { REACT_LOGO } from '../../../config/data';

const ReactBg = (props: BackgroundImageProps) => (
  <HeaderBgImage
    src={REACT_LOGO}
    top={props.top || props.bottom ? undefined : '-180px'}
    {...props}
  />
);

export default ReactBg;
