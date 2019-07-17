import React from 'react'
import styled from 'styled-components'
import { P } from '../text'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { selectTypeColor, selectBorderStyle } from '../utils'

const TrainingItemCol = styled(Col)`
  padding-bottom: 16px;
`

const TrainingRow = styled(Row)`
  margin-bottom: 1em;
`

const Calendar = styled(Link).attrs({
  className: props => props.className,
})`
  ${props =>
    `border: 3px ${selectBorderStyle(props.type)} ${selectTypeColor(
      props.type
    )};`}
  padding: 10px;
  font-family: barlow;
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
  startMonth,
  path,
  className,
}) => (
  <React.Fragment>
    <TrainingRow>
      <TrainingItemCol xs={5} md={4}>
        <Calendar className={className} type={type} to={path}>
          {startDay}
          <br />
          {startMonth}
        </Calendar>
      </TrainingItemCol>
      <TrainingItemCol xs={7} md={7}>
        <P>
          {title}
          <br />
          {cityCountry}
          <br />
          <Link className={className} to={path}>
            Find out more
          </Link>
        </P>
      </TrainingItemCol>
    </TrainingRow>
  </React.Fragment>
)

export default TrainingItem
