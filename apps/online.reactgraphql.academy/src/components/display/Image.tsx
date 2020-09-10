import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Box } from '../layout';
import { Image } from '@leanjs/ui-core';

const StyledGatsbyImage = ({ sx = {}, ...rest }) => {
  return <Box sx={{ maxWidth: '100%', ...sx }} as={GatsbyImage} {...rest} />;
};

export default (props) => {
  const Component = !(props.fluid || props.fixed) ? Image : StyledGatsbyImage;

  return <Component {...props} />;
};
