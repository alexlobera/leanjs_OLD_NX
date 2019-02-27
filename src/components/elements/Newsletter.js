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
      We publish learning resources directly from our curriculum regularly and
      we'd love to let you know about it.{' '}
    </P>
    <P>
      Signup below and learn about the cutting-edge in React thinking plus all
      the latest on our course dates{' '}
    </P>
    <LinkButton secondary to="#newsletter">
      Sign up now
    </LinkButton>
  </StyledNewsletter>
)

export default Newsletter
