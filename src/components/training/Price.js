import React from 'react'
import styled from 'styled-components'
import { GREY2, FONT_FAMILY } from '../../config/styles'

const Price = styled.span`
  ${FONT_FAMILY} font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${GREY2};
`

export const InstallmentsContainer = styled.div`
  margin: 12px 0;
`

export default Price
