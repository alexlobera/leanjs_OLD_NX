import React from 'react'
import styled from 'styled-components'

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0;
  quotes: '“' '”' '‘' '’';
  :before {
    content: open-quote;
  }
  :after {
    content: close-quote;
  }
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
