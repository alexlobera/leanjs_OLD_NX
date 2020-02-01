import React from 'react'
import { H3, P } from '../text'
import Segment from '../elements/Segment'
import LinkButton from '../buttons/LinkButton'
import { Row, Col } from '../layout/Grid'
import formatPrice from '../utils/currency'
import { DEFAULT_VAT_RATE } from '../../config'

const TrialCard = ({ trainingInstance, ...rest }) => {
  const price = formatPrice(
    trainingInstance.currency,
    trainingInstance.price,
    DEFAULT_VAT_RATE
  )
  return (
    <Segment small variant="primary" my={5} {...rest}>
      <Row>
        <Col md={9}>
          <H3>
            <a name="try-first" />
            You can try this course first
          </H3>
          <P>
            We have scheduled a trial for this course, which corresponds to the
            first session of this course curriculum. The{' '}
            <strong> {price} of the trial will be deducted</strong> from the
            price when you purchase the full course within one week.
          </P>
        </Col>
        <Col md={3} textAlign="center">
          <H3>{price}</H3>
          <LinkButton
            className="financial-support-link-apply"
            to={trainingInstance.path}
          >
            Buy trial
          </LinkButton>{' '}
        </Col>
      </Row>
    </Segment>
  )
}

export default TrialCard
