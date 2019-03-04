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
    <H5>Free learning resources</H5>
    <P>
      We share learning resources directly from our curriculum and we'd love to
      let you know about it.{' '}
    </P>
    <P>
      Signup and learn about cutting-edge React thinking plus the latest on our
      course dates{' '}
    </P>
    <LinkButton secondary to="#newsletter">
      Sign up now
    </LinkButton>
  </StyledNewsletter>
)

export default Newsletter
