import React from 'react';
import GatsbyImage from 'gatsby-image';
import withLazyLoad from './withLazyLoad';
import Box from '../layout/Box';
import { Image as LeanImage } from '@leanjs/ui-core';

const Image = withLazyLoad()(LeanImage);
const StyledGatsbyImage = ({ sx = {}, ...rest }) => {
  return <Box sx={{ maxWidth: '100%', ...sx }} as={GatsbyImage} {...rest} />;
};

export default (props) => {
  const Component = !(props.fluid || props.fixed) ? Image : StyledGatsbyImage;

  return <Component {...props} />;
};
