import React from 'react'
import styled from 'styled-components'
import { P, Span } from '../text'
import Link from '../navigation/Link'
import { selectTypeColor, selectBorderStyle } from '../utils'
import Flex from '../layout/Flex'
import Tag from '../elements/Tag'
import { formatUTC } from '../utils'
import { WHITE } from '../../config/styles'

const Calendar = styled(Link).attrs(props => ({
  className: props.className,
}))`
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
  background-color: ${WHITE};
`

export function getTrainingTimings({ training }) {
  const formatedDate = formatUTC(
    training.startDate,
    training.utcOffset,
    'D MMM'
  )
  const dayMonth = formatedDate ? formatedDate.split(' ') : ['', '']
  const startDate = new Date(training.startDate)
  const endDate = new Date(training.endDate)
  const daysCoefficient = 86400000 // 1000 * 60 * 60 * 24
  const hourCoefficient = 3600000 // 1000 * 60 * 60
  const days = Math.round((endDate - startDate) / daysCoefficient) + 1
  const hours = Math.round((endDate - startDate) / hourCoefficient)
  const duration =
    hours < 1
      ? `1 hour`
      : hours < 7
      ? `${hours} hours`
      : days < 2
      ? '1 day'
      : days < 3
      ? `2 days`
      : days < 5
      ? `3 days`
      : days < 10
      ? '1 week'
      : days < 40
      ? '1 month'
      : ''

  return { duration, dayMonth }
}

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
  textProps = {},
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
    <P display="inline" pl={2} pr={2} {...textProps}>
      {title}
      <br />
      {isOnline ? (
        <Tag as={Link} to={path}>
          Online
        </Tag>
      ) : (
        cityCountry
      )}
      <br />
      <Link className={className} to={path} {...textProps}>
        Prices & more details
      </Link>
    </P>
  </Flex>
)

export default TrainingItem
