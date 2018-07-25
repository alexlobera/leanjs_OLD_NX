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

// export default styled(Blockquote)`
//   padding-top: 10px;
//   padding-bottom: 20px;
//   background: #f9f9f9;
//   border-left: 5px solid #ccc;
//   margin: 1.5em 10px;
//   padding: 0.5em 10px;
//   font-style: italic;
//   /* quotes: '\\201C''\\201D''\\2018''\\2019'; */

//   :before {
//     color: #ccc;
//     /* content: open-quote; */
//     content: '”';
//     font-size: 4em;
//     line-height: 0.1em;
//     margin-right: 0.25em;
//     vertical-align: -0.4em;
//   }
// `
