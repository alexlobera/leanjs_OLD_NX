import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'

const Ul = styled.ul`
  ${props =>
    props.unstyled
      ? `
    margin-left: 0;
    > li {
      list-style-type: none;
      margin-bottom: 1.5em;
    }
  `
      : ''} ${props =>
    props.inline
      ? `
          margin: 0;
          padding: 0;
          > li {
            display: inline-block;
            padding: 8px;
            margin-bottom:0;
            :first-child {
              padding-left: 0;
            }
            :last-child {
              padding-right: 0;
            }
          }
        `
      : `
          padding-top: 10px;
      `};
`

const Li = styled.li`
  ${FONT_FAMILY};
`

export { Ul, Li }
export default Ul
