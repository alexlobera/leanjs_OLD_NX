import React from 'react'
import styled from 'styled-components'
import { P, Span } from '../text'
import Link from '../navigation/Link'
import { selectTypeColor, selectBorderStyle } from '../utils'
import Flex from '../layout/Flex'

const Calendar = styled(Link).attrs({
  className: props => props.className,
})`
  ${props =>
    `border: 3px ${selectBorderStyle(props.type)} ${selectTypeColor(
      props.type
    )};`}
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
`

const TrainingItem = ({
  type,
  title,
  cityCountry,
  startDay,
  duration,
  startMonth,
  path,
  className,
}) => (
  <Flex flexDirection="row" alignItems="flex-start" pb={4}>
    <Calendar className={className} type={type} to={path}>
      {startDay}
      <br />
      {startMonth}
      <Span fontSize={1} textAlign="center">
        {duration}
      </Span>
    </Calendar>
    <P display="inline" pl={2} pr={2}>
      {title}
      <br />
      {cityCountry}
      <br />
      <Link className={className} to={path}>
        Find out more
      </Link>
    </P>
  </Flex>
)

export default TrainingItem
