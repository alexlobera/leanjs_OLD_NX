import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Box from '../layout/Box';

const Image = styled(Box)`
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
  ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
`;
Image.defaultProps = {
  box: 'img',
};
const StyledGatsbyImage = ({ circle, sx = {}, ...rest }) => {
  if (circle) {
    sx.borderRadius = '50%';
  }
  return <Box sx={sx} box={GatsbyImage} {...rest} />;
};

export default (props) => {
  const Component = !(props.fluid || props.fixed) ? Image : StyledGatsbyImage;

  return <Component {...props} />;
};
