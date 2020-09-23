import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import Box from '../Layout/Box';

const StyledInfoBox = styled(Box)`
  ${color}
  ul {
    margin-left: 0;
  }
`;

StyledInfoBox.defaultProps = {
  box: 'aside',
  mr: 5,
  py: 4,
  px: 5,
  bg: 'GREY_MEDIUM',
  fontSize: 0,
};

const InfoBox: React.FunctionComponent = ({ children }) => {
  return <StyledInfoBox>{children}</StyledInfoBox>;
};

export default InfoBox;
