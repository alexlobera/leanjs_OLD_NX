import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

export const P_STYLE = `
  ${FONT_FAMILY}
  ${TEXT_SIZE({ lg: true })}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  padding-bottom: 18px;
  line-height: 1.5;

  > a {
    ${TEXT_SIZE({ lg: true })}
  }
`

export default styled.p`
  ${P_STYLE};
`
