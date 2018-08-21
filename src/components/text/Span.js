import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

const Span = styled.span`
  ${props => props.lineThrough ? `text-decoration: line-through` : null}
  ${FONT_FAMILY} ${TEXT_SIZE({ lg: true })};
`

export default Span
