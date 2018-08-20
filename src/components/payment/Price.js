import React from 'react'
import styled from 'styled-components'
import { GREY2, FONT_FAMILY } from '../../config/styles'

export const Price = styled.span`
  ${FONT_FAMILY} font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: ${GREY2};
  display: inline-block;
  ${props => props.marginRight ? `margin-right: ${props.marginRight}px;` : null}
`

export default Price
