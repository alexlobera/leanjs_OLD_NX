import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  ${props =>
    props.unstyled
      ? `
    margin-left: 0;
    > li {
      list-style-type: none;
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
            :first-child {
              padding-left: 0;
            }
            :last-child {
              padding-right: 0;
            }
          }
        `
      : ''};
`

const Li = styled.li``

export { Ul, Li }
export default Ul
