import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

export default styled.p`
  ${FONT_FAMILY}
  ${TEXT_SIZE({ lg: true })}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  padding-bottom: 20px;
  line-height: 1.2;

  > a {
    ${TEXT_SIZE({ lg: true })}
  }
`
