import React from 'react'
import styled from 'styled-components'

import { fontColor } from '../text'
import { getVariantProps } from '../utils'
import Box from '../layout/Box'
import { BLUE, WHITE, DARK_GREY, BOX_SHADOW } from '../../config/styles'

const cardVariants = ({ borderColor, borderStyle }) => ({
  primary: {
    borderLeft: `3px ${borderStyle}`,
    borderColor: borderColor,
    pl: [2, 5],
  },
  secondary: {
    boxShadow: BOX_SHADOW,
    pl: [1, 5],
    pr: [1, 5],
    pt: [1, 5],
    pb: [1, 5],
    backgroundColor: WHITE,
  },
  info: {
    border: `3px ${borderStyle}`,
    borderColor: borderColor,
    pl: [1, 5],
    pr: [1, 5],
    pt: [1, 5],
    pb: [1, 5],
  },
})

const StyledCard = styled(Box)`
  ${fontColor(DARK_GREY, true)}
`
const Card = ({ borderColor, borderStyle, children, ...rest }) => {
  let smallProps = {}
  if (rest.small) {
    smallProps.pt = [1, 3]
    smallProps.pb = [1, 3]
    smallProps.pl = [1, 3]
    smallProps.pr = [1, 3]
  }
  return (
    <StyledCard
      {...getVariantProps(
        rest.variant || rest.variants,
        cardVariants({ borderColor, borderStyle })
      )}
      {...smallProps}
      {...rest}
    >
      {children}
    </StyledCard>
  )
}
Card.defaultProps = {
  variant: 'primary',
  borderColor: BLUE,
  borderStyle: 'solid',
  position: 'relative',
}
Card.displayName = 'Card'

export default Card
