import React from 'react'
import { P } from '../text'
import { Col } from '../layout/Grid'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { Image } from '../elements'

const paddingBottom = '15px'

const TrainingItem = ({ name, location, startDate, path, imageSrc }) => (
  <React.Fragment>
    <Col xs={5} md={2} style={{ paddingBottom }}>
      <Link to={path}>
        <Image src={imageSrc} />
      </Link>
    </Col>
    <Col xs={7} md={4} style={{ paddingBottom }}>
      Venue: {location}
      <P>Starts: {startDate}</P>
      <LinkButton to={path} children={name} />
    </Col>
  </React.Fragment>
)

export default TrainingItem
