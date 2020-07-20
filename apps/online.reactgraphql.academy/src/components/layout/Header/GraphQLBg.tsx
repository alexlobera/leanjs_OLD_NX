import React from 'react';

import HeaderBgImage, { BackgroundImageProps } from './HeaderBgImage';
import { GRAPHQL_LOGO } from '../../../config/data';

const GraphQLBg = (props: BackgroundImageProps) => (
  <HeaderBgImage src={GRAPHQL_LOGO} top="300px" left={'-60%'} {...props} />
);

export default GraphQLBg;
