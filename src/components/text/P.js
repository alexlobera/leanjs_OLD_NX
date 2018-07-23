import React from 'react'
import styled from 'styled-components'

export default styled.p`
  text-align: ${props => props.align || 'left'};
`
