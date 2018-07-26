import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, reactBlue } from '../../config/styles'

const Blockquote = styled.blockquote`
  ${FONT_FAMILY} margin: 0;
  padding: 0;
  quotes: '“' '”' '‘' '’';
  :before {
    content: open-quote;
  }
  :after {
    content: close-quote;
  }

  ${props => {
    if (props.bg === 'primary') {
      return `
        padding: 24px;
        background-color: ${reactBlue()};
        font-size: 16px;
        font-style: italic;
      `
    }
  }};
`

export default Blockquote
