import React from 'react'
import P from '../text'
import { Col } from '../layout/Grid'
import { LinkButton } from '../buttons'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'

const TrainingItem = ({ name, location, startDate, path, imageSrc }) => (
  <React.Fragment>
    <Col xs={5} lg={2}>
      <ImagePlaceholder width="100%" />
      {/* <img src={imageSrc}></img> */}
    </Col>
    <Col xs={7} lg={4}>
      {location}
      <P>{startDate}</P>
      <LinkButton to={path} children={name} />
    </Col>
  </React.Fragment>
)

export default TrainingItem
