import React from 'react'
import styled, { css } from 'styled-components'

const Ul = styled.ul`
  ${props =>
    props.inline
      ? css`
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

const Li = styled.li`
  ${props =>
    props.withIcon &&
    css`
      list-style-type: none;
    `};
`

export { Ul, Li }
export default Ul
