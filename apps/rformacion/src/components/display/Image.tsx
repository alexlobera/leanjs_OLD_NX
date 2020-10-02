import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Box } from '../layout';
import { Image as LeanImage } from '@leanjs/ui-core';

const StyledGatsbyImage = ({ sx = {}, ...rest }) => {
  return <Box sx={{ maxWidth: '100%', ...sx }} as={GatsbyImage} {...rest} />;
};

export const Image = (props) => {
  const Component = !(props.fluid || props.fixed)
    ? LeanImage
    : StyledGatsbyImage;

  return <Component {...props} />;
};

export default Image;
