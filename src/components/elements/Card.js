import React from 'react'
import styled from 'styled-components'

import { fontColor } from '../text'
import { getVariantProps } from '../utils'
import Box from '../layout/Box'
import { BLUE, WHITE, DARK_GREY, BOX_SHADOW } from '../../config/styles'

const cardVariants = ({ borderColor = BLUE, borderStyle = 'solid' }) => ({
  primary: {
    borderLeft: `3px ${borderStyle}`,
    borderLeftColor: borderColor,
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
const Card = ({ borderColor, borderStyle, sx = {}, children, ...rest }) => {
  let smallSxProps = {}
  if (rest.small) {
    smallSxProps.pt = [1, 3]
    smallSxProps.pb = [1, 3]
    smallSxProps.pl = [1, 3]
    smallSxProps.pr = [1, 3]
  }
  return (
    <StyledCard
      //   {...getVariantProps(
      //     rest.variant || rest.variants,
      //     cardVariants({ borderColor, borderStyle })
      //   )}
      sx={{
        // borderColor: BLUE,
        // borderStyle: 'solid',
        position: 'relative',
        ...getVariantProps(
          rest.variants || rest.variant,
          cardVariants({ borderColor, borderStyle })
        ),
        ...smallSxProps,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </StyledCard>
  )
}
Card.defaultProps = {
  variant: 'primary',
}
Card.displayName = 'Card'

export default React.memo(Card)
