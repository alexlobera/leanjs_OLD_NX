import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'
import LinkButton from '../buttons/LinkButton'
import { P, H3 } from '../text'
import Link from '../navigation/Link'

const StyledNewsletter = styled.div`
  ${FONT_FAMILY};
  margin: 2rem 0 0 0;
  h5 {
    margin: 1rem 0;
  }
`
const Newsletter = () => (
  <StyledNewsletter>
    <H3>Free learning resources!</H3>
    <P>
      We share our resources directly from our{' '}
      <Link to="/react/curriculum">React</Link> and{' '}
      <Link to="/graphql/curriculum">GraphQL</Link> curriculums and we'd love
      for you to enjoy and learn from them!{' '}
    </P>
    <LinkButton to="#newsletter">Sign up now</LinkButton>
  </StyledNewsletter>
)

export default Newsletter
