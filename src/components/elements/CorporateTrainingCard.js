import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'
import LinkButton from '../buttons/LinkButton'
import { P, H3 } from '../text'
import Link from '../navigation/Link'

const StyledCorporateTrainingCard = styled.div`
  ${FONT_FAMILY};
  margin: 2rem 0 0 0;
  h5 {
    margin: 1rem 0;
  }
`
const CorporateTrainingCard = () => (
  <StyledCorporateTrainingCard>
    <H3>Corporate Team Training</H3>
    <P>
      Private team training, located in your offices anywhere in the world,
      based on our proven curriculum for React and GraphQL{' '}
    </P>
    <LinkButton to="/corporate-team-training/">
      Corporate Team Training
    </LinkButton>
  </StyledCorporateTrainingCard>
)

export default CorporateTrainingCard
