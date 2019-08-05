import React from 'react'
import styled from 'styled-components'

import Box from '../layout/Box'
import {
  DARK_BLUE,
  BROWN,
  WHITE,
  DARK_GREY,
  BOX_SHADOW,
} from '../../config/styles'
import { fontColor } from '../text'

const StyledSegment = styled(Box)`
  position: relative;
  ${({ variant, small }) => {
    const isImportant = !!small
    switch (variant) {
      case 'primary':
        return `
          ${fontColor(WHITE, isImportant)}
        `
      case 'secondary':
        return `
          ${fontColor(DARK_GREY, isImportant)}
        `
      default:
        return ''
    }
  }}
`
StyledSegment.defaultProps = {
  pt: [0, 7],
  pb: [0, 7],
  pl: 0,
  pr: 0,
}

const Segment = props => {
  let smallProps = {}
  if (props.small) {
    smallProps.pt = [0, 5]
    smallProps.pb = [0, 5]
    smallProps.pl = [1, 5]
    smallProps.pr = [1, 5]
  }
  return (
    <StyledSegment
      {...(segmentVariantProps[props.variant] || {})}
      {...smallProps}
      {...props}
    />
  )
}

const segmentVariantProps = {
  primary: {
    pt: [2, 5],
    pb: [2, 5],
    backgroundColor: DARK_BLUE,
    border: [null, `1px solid ${BROWN}`],
    borderColor: BROWN,
  },
  secondary: {
    backgroundColor: WHITE,
    boxShadow: [null, BOX_SHADOW],
  },
}

Segment.displayName = 'Segment'
Segment.defaultProps = {
  variant: 'secondary',
}

export default Segment
