import React from 'react'
import styled from 'styled-components'
import { DARK_BLUE, DARK_GREY } from '../../config/styles'
import Box from './Box'

export const MOB_SECTION_MARGIN_Y = 5

const sectionVariantProps = {
  dark: {
    backgroundColor: [DARK_BLUE, 'transparent'],
  },
  grey: {
    backgroundColor: [DARK_GREY, 'transparent'],
  },
}

const StyledSection = styled(Box)`
  p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

const Section = ({ variant, ...rest }) => (
  <StyledSection
    {...((variant && sectionVariantProps[variant]) || {})}
    {...rest}
  />
)

Section.defaultProps = {
  pt: [4, 4],
  pb: [4, 4],
  mt: [2, 3],
  mb: [2, 3],
  display: ['inline-block', 'block'],
  box: 'section',
}
Section.displayName = 'Section'

export const TopSection = styled(Section)``
TopSection.defaultProps = {
  position: 'relative',
  mt: [0, -150],
}

TopSection.displayName = 'TopSection'

export default Section
