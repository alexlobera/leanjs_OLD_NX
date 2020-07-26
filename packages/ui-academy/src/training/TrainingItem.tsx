import React from 'react';
import styled from 'styled-components';
import { P, Span, Flex, Tag } from '@leanjs/ui-core';
import { Link } from '@leanjs/ui-link';
import { selectBorderStyle } from '../utils';

const WHITE = '#fff';
const BLUE = `rgba(97, 218, 251, 1)`;
const selectTechColor = () => BLUE; // TODO IMPLEMENT THIS

// const Calendar = styled(Link).attrs((props) => ({
//   className: props.className,
// }))`
const Calendar = styled(Link)`
  ${({ tech, trainingType }) =>
    `border: 3px ${selectBorderStyle({ trainingType })} ${selectTechColor()};`}
  padding: 10px;
  width: 99px;
  flex: 0 0 99px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 1.16rem;
  text-decoration: none;
  line-height: normal;
  background-color: ${WHITE};
  text-decoration: none !important;
`;

export const TrainingItem = ({
  trainingType,
  tech,
  title,
  cityCountry,
  startDay,
  duration,
  startMonth,
  path,
  className,
  isOnline,
  textSxProps = {},
}) => (
  <Flex sx={{ flexDirection: 'row', alignItems: 'flex-start', pb: 4 }}>
    <Calendar className={className} trainingType={trainingType} to={path}>
      {startDay}
      <br />
      {startMonth}
      <Span sx={{ fontSize: 1, textAlign: 'center' }}>{duration}</Span>
    </Calendar>
    <P
      sx={{
        display: 'inline',
        py: 0,
        m: 0,
        pl: 2,
        pr: 2,
        ...textSxProps,
      }}
    >
      {title}
      <br />
      {isOnline ? (
        <Tag as={Link} to={path}>
          Remote
        </Tag>
      ) : (
        cityCountry
      )}
      <br />
      <Link className={className} to={path} sx={textSxProps}>
        Prices & more details
      </Link>
    </P>
  </Flex>
);

// export default React.memo(TrainingItem);
