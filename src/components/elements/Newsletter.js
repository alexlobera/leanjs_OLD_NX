import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'
import LinkButton from '../buttons/LinkButton'
import { P, H5 } from '../text'

const StyledNewsletter = styled.div`
  ${FONT_FAMILY};
  margin: 2rem 0 0 0;
  h5 {
    margin: 1rem 0;
  }
`
const Newsletter = () => (
  <StyledNewsletter>
    <H5>Signup to our newsletter</H5>
    <P>
      Join our community! Be the first to know all about the latest course
      dates, offers and new course locations.{' '}
    </P>
    <LinkButton secondary to="#contact-us">
      Sign up now
    </LinkButton>
  </StyledNewsletter>
)

export default Newsletter
