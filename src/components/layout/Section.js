import React from 'react'
import styled from 'styled-components'
import { DARK_BLUE, DARK_GREY } from '../../config/styles'
import Box from './Box'

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
  pt: [1, 4],
  pb: [1, 4],
  mt: [3, 0],
  mb: [3, 0],
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
