import React from 'react'
import styled from 'styled-components'

import { H4, P } from 'src/components/text'
import { LinkButton } from 'src/components/buttons'
import { REACT_BLUE_DARK } from 'src/config/styles'

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
      <H4>{training.title}</H4>
      <P>{training.text}</P>
      <LinkButton to={data.to} variant="secondary">
        Find Out More
      </LinkButton>
    </TrainingCard>
  ))

export default TrainingCard
