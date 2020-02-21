import React from 'react'
import { H3 } from '../text'
import Segment from '../elements/Segment'
import LinkButton from '../buttons/LinkButton'
import { Row, Col } from '../layout/Grid'

const TrialOfCard = ({ trainingInstance, sx = {}, ...rest }) => {
  return (
    <Segment small variant="primary" sx={{ my: 5, ...sx }} {...rest}>
      <Row>
        <Col md={8} sx={{ display: 'flex !important', alignItems: 'center' }}>
          <H3 sx={{ mb: 0 }}>
            Looking for the full training course of this trial?
          </H3>
        </Col>
        <Col md={4} sx={{ textAlign: 'center' }}>
          <LinkButton
            className="instance-page-trial-card"
            variant="primary"
            to={trainingInstance.toPath}
            sx={{
              display: ['block', 'inline-block'],
              mt: [2, 0],
            }}
          >
            Check out the full training
          </LinkButton>
        </Col>
      </Row>
    </Segment>
  )
}

export default TrialOfCard
