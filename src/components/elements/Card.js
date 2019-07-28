import React from 'react'
import styled from 'styled-components'

import Box from '../layout/Box'
import { DARK_BLUE, BROWN, WHITE, BLUE, DARK_GREY } from '../../config/styles'
import { fontColor } from '../text'

const StyledCard = styled(Box)`
  position: relative;
  ${({ variant, small }) => {
    const isImportant = !!small
    switch (variant) {
      case 'primary':
        return `
          ${fontColor(WHITE, { isImportant })}
        `
      case 'secondary':
        return `
          ${fontColor(DARK_GREY, { isImportant })}
        `
      default:
        return ''
    }
  }}
`
StyledCard.defaultProps = {
  pt: [0, 7],
  pb: [0, 7],
  pl: 0,
  pr: 0,
}

const Card = props => {
  let smallProps = {}
  if (props.small) {
    smallProps.pt = [0, 5]
    smallProps.pb = [0, 5]
    smallProps.pl = [1, 5]
    smallProps.pr = [1, 5]
  }
  return (
    <StyledCard
      {...smallProps}
      {...(cardVariantProps[props.variant] || {})}
      {...props}
    />
  )
}

const cardVariantProps = {
  info: {
    pl: [0, 6],
    pr: [0, 6],
    pt: [0, 6],
    pb: [0, 6],
    border: [null, '3px solid'],
    borderColor: [null, BLUE],
  },
  primary: {
    pt: [2, 5],
    pb: [2, 5],
    backgroundColor: DARK_BLUE,
    border: [null, `1px solid ${BROWN}`],
    borderColor: BROWN,
  },
  secondary: {
    backgroundColor: WHITE,
    boxShadow: [
      null,
      '0 -2px 24px 0 rgba(0, 0, 0, 0.24), 0 2px 24px 0 rgba(0, 0, 0, 0.12);',
    ],
  },
}

Card.displayName = 'Card'
Card.defaultProps = {
  variant: 'secondary',
}

export default Card
