import React from 'react'
import styled from 'styled-components'

import { H4, P } from '../text'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { REACT_BLUE_DARK } from '../../config/styles'

const TrainingCard = styled.div`
  border-left: 5px solid;
  border-color: ${REACT_BLUE_DARK};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;
  button {
    display: inline-block;
  }
`

export const TrainingCardList = ({ data = [] }) =>
  data.map(training => (
    <TrainingCard>
      <Link to={training.to}>
        <H4>{training.title}</H4>
      </Link>
      <P>{training.text}</P>
      <LinkButton to={training.to} variant="secondary">
        Find Out More
      </LinkButton>
    </TrainingCard>
  ))

export default TrainingCard
