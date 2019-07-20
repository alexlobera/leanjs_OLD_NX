import React from 'react'
import LinkButton from '../buttons/LinkButton'
import { P, H3 } from '../text'
import { GRAPHQL_BOOTCAMP } from '../../config/data'

const CorporateTrainingCard = ({ type }) => (
  <React.Fragment>
    <H3>Corporate Team Training</H3>
    <P>
      Private team training, located in your offices anywhere in the world,
      based on our proven curriculum for React and GraphQL{' '}
    </P>
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
