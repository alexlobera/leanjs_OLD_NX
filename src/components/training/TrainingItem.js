import React from 'react'
import styled from 'styled-components'
import { P } from '../text'
import { Col } from '../layout/Grid'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { Image } from '../elements'

const TrainingItemCol = styled(Col)`
  padding-bottom: 16px;
`

const TrainingItem = ({ name, city, country, startDate, path, imageSrc }) => (
  <React.Fragment>
    <TrainingItemCol xs={5} md={2}>
      <Link to={path}>
        <Image src={imageSrc} />
      </Link>
    </TrainingItemCol>
    <TrainingItemCol xs={7} md={4}>
      <P>
        Location: {city}, {country}
        <br />
        Starts: {startDate}
      </P>
      <LinkButton to={path} children={name} />
    </TrainingItemCol>
  </React.Fragment>
)

export default TrainingItem
