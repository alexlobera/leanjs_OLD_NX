import React from 'react'
import styled from 'styled-components'
import { SCREEN_SM_MIN } from '../utils'

const Section = styled.section`
  padding-top: ${props => (props.top ? '150px' : '30px')};
  ${props => (props.top ? 'margin-top: -85px;' : '')} padding-bottom: 30px;
  p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

Section.displayName = 'Section'

export const TopSection = styled(Section)`
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-top: -125px;
  }
`

TopSection.displayName = 'TopSection'

export default Section
