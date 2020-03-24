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
  ${({ tech, trainingType }) =>
    `border: 3px ${selectBorderStyle({ trainingType })} ${selectTypeColor({
      tech,
    })};`}
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
  if (!training) {
    return null
  }

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
      : days < 15
      ? '2 weeks'
      : days < 22
      ? '3 weeks'
      : days < 30
      ? '4 weeks'
      : days < 36
      ? '5 weeks'
      : days < 43
      ? '6 weeks'
      : days < 50
      ? '7 weeks'
      : ''

  return { duration, dayMonth }
}

const TrainingItem = ({
  // type,
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
    <Calendar
      className={className}
      tech={tech}
      trainingType={trainingType}
      to={path}
    >
      {startDay}
      <br />
      {startMonth}
      <Span sx={{ fontSize: 1, textAlign: 'center' }}>{duration}</Span>
    </Calendar>
    <P sx={{ display: 'inline', pl: 2, pr: 2, ...textSxProps }}>
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
)

export default React.memo(TrainingItem)
