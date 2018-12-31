import React from 'react'
import styled from 'styled-components'
import { LIGHT_RED, FONT_FAMILY } from '../../config/styles'
import Link from '../navigation/Link'
import { QuestionMarkIcon } from '../icons'

const StyledFeedback = styled.div`
  ${FONT_FAMILY};
  a {
    margin-left: 4px;
  }
  border: 2px dashed ${LIGHT_RED};
  padding: 1rem;
  margin: 1rem 0;
  max-width: 320px;
  display: flex;
  align-items: center;
`
const Feedback = () => (
  <StyledFeedback>
    <QuestionMarkIcon />
    Any questions? <Link to="#contact-us">Contact us</Link>
  </StyledFeedback>
)

export default Feedback
