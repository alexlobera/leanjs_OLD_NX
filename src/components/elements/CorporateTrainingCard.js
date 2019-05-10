import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'
import LinkButton from '../buttons/LinkButton'
import { P, H3 } from '../text'
import { GRAPHQL_BOOTCAMP } from '../../config/data'

const StyledCorporateTrainingCard = styled.div`
  ${FONT_FAMILY};
  margin: 2rem 0 0 0;
  h5 {
    margin: 1rem 0;
  }
`
const CorporateTrainingCard = ({ type }) => (
  <StyledCorporateTrainingCard>
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
    >
      Corporate Team Training
    </LinkButton>
  </StyledCorporateTrainingCard>
)

export default CorporateTrainingCard
