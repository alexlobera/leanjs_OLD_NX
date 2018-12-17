import React from 'react'
import styled from 'styled-components'
import { P } from '../text'
import { Col, Row } from '../layout/Grid'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { Image } from '../elements'
import { selectTypeColor } from '../utils';

const TrainingItemCol = styled(Col)`
  padding-bottom: 16px;
`

const TrainingRow = styled(Row)`
  margin-bottom: 1em;
`

const Calander = styled.div`
  border: 3px solid ${props => selectTypeColor(props.type)};
  padding: 10px;
  font-family: barlow;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
`

const TrainingItem = ({ type, city, country, startDay, startMonth, path, imageSrc }) => (
  <React.Fragment>
    <TrainingRow>
    <TrainingItemCol xs={5} md={6}>
      <Calander type={type}>
        {startDay}
        <br />
        {startMonth}
      </Calander>
    </TrainingItemCol>
    <TrainingItemCol xs={7} md={6}>
      <P>
        {type}
        <br />
        {city}, {country}
        <br />
      <Link to={path}>
        Find out more
      </Link>
      </P>
    </TrainingItemCol>
    </TrainingRow>
  </React.Fragment>
)

export default TrainingItem
