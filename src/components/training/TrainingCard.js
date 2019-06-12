import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import { DARK_GREY } from '../../config/styles'
import { H4, P } from '../text'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import Box from '../layout/Box'

const TrainingCard = styled(Box)`
  border-left: 5px solid;
  border-color: ${({ borderColor = DARK_GREY }) => borderColor};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 1rem 0;
  /* margin: 0 0 1rem 0; */
  button {
    display: inline-block;
  }
  ${space}
`

TrainingCard.displayName = 'TrainingCard'
TrainingCard.propTypes = {
  color: PropTypes.string,
}
TrainingCard.defaultProps = {
  mb: 6,
}

export const TrainingCardList = ({ data = [], borderColor }) =>
  data.map((training, i) => (
    <TrainingCard key={`${training.to}${i}`} borderColor={borderColor}>
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
