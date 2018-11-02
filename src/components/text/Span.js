import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

const SPAN_STYLE = `
  ${props => (props.lineThrough ? `text-decoration: line-through` : null)}
  ${FONT_FAMILY} ${TEXT_SIZE({ lg: true })};
`

const Span = styled.span`
  ${SPAN_STYLE}
`

export default Span
