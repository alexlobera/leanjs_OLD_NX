import React from 'react'
import styled from 'styled-components'
import { P } from '../text'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { selectTypeColor } from '../utils'

const TrainingItemCol = styled(Col)`
  padding-bottom: 16px;
`

const TrainingRow = styled(Row)`
  margin-bottom: 1em;
`

const Calander = styled(Link)`
  border: 3px solid ${props => selectTypeColor(props.type)};
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

const TrainingItem = ({ type, city, country, startDay, startMonth, path }) => (
  <React.Fragment>
    <TrainingRow>
      <TrainingItemCol xs={5} md={3}>
        <Calander type={type} to={path}>
          {startDay}
          <br />
          {startMonth}
        </Calander>
      </TrainingItemCol>
      <TrainingItemCol xs={7} md={7}>
        <P>
          {type}
          <br />
          {city}, {country}
          <br />
          <Link to={path}>Find out more</Link>
        </P>
      </TrainingItemCol>
    </TrainingRow>
  </React.Fragment>
)

export default TrainingItem
