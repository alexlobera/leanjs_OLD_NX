import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

const Span = styled.span`
    ${FONT_FAMILY}
    ${TEXT_SIZE({ lg: true })}
`

export default Span