import styled from 'styled-components';
import { borderColor } from 'styled-system';
import Box from '../Layout/Box';
import { addDefaultProps } from '../../Utils/react';

const StyledCard = styled(Box)`
  ${borderColor};
`;

const StyledCardDefaultProps = {
  pr: 3,
  pl: 3,
  borderColor: 'GREY',
  borderLeft: '0.2rem solid',
  mb: 4,
  lineHeight: 1,
};

const Card = addDefaultProps(StyledCard, StyledCardDefaultProps);

export default Card;
