import React from 'react';

import HeaderBgImage, { BackgroundImageProps } from './HeaderBgImage';
import { REACT_LOGO } from '../../../config/data';

const ReactBg = (props: BackgroundImageProps) => (
  <HeaderBgImage
    srcImg={REACT_LOGO}
    top={props.top || props.bottom ? undefined : '-180px'}
    {...props}
  />
);

export default ReactBg;
