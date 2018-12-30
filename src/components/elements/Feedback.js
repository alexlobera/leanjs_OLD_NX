import React from 'react'
import styled from 'styled-components'
import { LIGHT_RED, FONT_FAMILY } from '../../config/styles'
import Link from '../navigation/Link'
import { QuestionMarkIcon } from '../icons'

const FeedbackWrapper = styled.div`
  ${FONT_FAMILY};
  border: 2px dashed ${LIGHT_RED};
  padding: 1rem;
  margin: 1rem 0;
  max-width: 320px;
  display: flex;
  align-items: center;
`
const Feedback = () => (
  <FeedbackWrapper>
    <QuestionMarkIcon />
    Any questions?{' '}
    <Link to="#contact-us" style={{ marginLeft: 4 }}>
      Contact us
    </Link>
  </FeedbackWrapper>
)

export default Feedback
