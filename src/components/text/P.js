import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles'

export default styled.p`
  ${FONT_FAMILY}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  padding-bottom: 8px;
`
