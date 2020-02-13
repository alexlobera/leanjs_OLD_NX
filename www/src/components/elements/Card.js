import React from 'react'
import styled from 'styled-components'

import { fontColor } from '../text'
import { getVariantProps } from '../utils'
import Box from '../layout/Box'

const cardVariants = ({ borderColor = 'react', borderStyle = 'solid' }) => ({
  primary: {
    borderLeft: `3px ${borderStyle}`,
    borderLeftColor: borderColor,
    pl: [2, 5],
  },
  secondary: {
    boxShadow: 'box',
    pl: [1, 5],
    pr: [1, 5],
    pt: [1, 5],
    pb: [1, 5],
    backgroundColor: 'background',
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
  ${({ theme = {} }) =>
    fontColor(theme.colors ? theme.colors.text : undefined, true)}
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
      sx={{
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
