import React from 'react'
import LinkButton from '../buttons/LinkButton'
import { P, H3 } from '../text'
import { GRAPHQL_BOOTCAMP } from '../../config/data'

const CorporateTrainingCard = ({ type }) => (
  <React.Fragment>
    <H3>Training anywhere, anytime?</H3>
    <LinkButton
      to={
        type === GRAPHQL_BOOTCAMP
          ? `/graphql/training/corporate/`
          : '/react/training/corporate/'
      }
      className="corporate-team-training-course-cta"
    >
      Corporate Team Training
    </LinkButton>
  </React.Fragment>
)

export default CorporateTrainingCard
