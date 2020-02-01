import React from 'react'
import { H3, P } from '../text'
import Segment from '../elements/Segment'
import LinkButton from '../buttons/LinkButton'
import { Row, Col } from '../layout/Grid'

const TrialOfCard = ({ trainingInstance, ...rest }) => {
  return (
    <Segment small variant="primary" my={5} {...rest}>
      <Row>
        <Col md={8} display="flex !important" alignItems="center">
          <H3 mb={0}>Looking for the full course of this trial?</H3>
        </Col>
        <Col md={4} textAlign="center">
          <LinkButton
            className="instance-page-trial-card"
            variant="primary"
            to={trainingInstance.toPath}
            display={['block', 'inline-block']}
            mt={[2, 0]}
          >
            Check out the full course
          </LinkButton>
        </Col>
      </Row>
    </Segment>
  )
}

export default TrialOfCard
