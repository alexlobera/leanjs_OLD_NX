import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DARK_GREY } from '../../config/styles'
import { H4, P } from '../text'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import Flex from '../layout/Flex'

const TrainingCard = styled(Flex)`
  border-left: 5px solid;
  border-color: ${({ borderColor = DARK_GREY }) => borderColor};
  button {
    display: inline-block;
  }
`

TrainingCard.displayName = 'TrainingCard'
TrainingCard.propTypes = {
  color: PropTypes.string,
}

TrainingCard.defaultProps = {
  mt: 0,
  mr: 5,
  mb: 6,
  ml: 0,
  py: 3,
  pr: 3,
  pl: 5,
  flexDirection: 'column',
}

export const TrainingCardList = ({ data = [], borderColor, className = '' }) =>
  data.map((training, i) => (
    <TrainingCard key={`${training.to}${i}`} borderColor={borderColor}>
      <Link to={training.to} className={className}>
        <H4>{training.title}</H4>
      </Link>
      <P>{training.text}</P>
      <LinkButton to={training.to} variant="secondary" className={className}>
        Find Out More
      </LinkButton>
    </TrainingCard>
  ))

export default TrainingCard
