import React from 'react'
import styled from 'styled-components'
import { P, Span } from '../text'
import Link from '../navigation/Link'
import { selectTypeColor, selectBorderStyle } from '../utils'
import Flex from '../layout/Flex'
import Tag from '../elements/Tag'

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
  isOnline,
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
      {isOnline ? <Tag>Online</Tag> : cityCountry}
      <br />
      <Link className={className} to={path}>
        Prices & more details
      </Link>
    </P>
  </Flex>
)

export default TrainingItem
