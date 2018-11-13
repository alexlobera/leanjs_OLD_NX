import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'


// export default styled.div`
//   font-family: sans-serif;
//   font-size: 0.9rem;
//   border-radius: 2px;
//   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
//   background-color: #ffffff;
//   border: solid 1px #002938;
//   padding: 2px 15px;
//   display: inline-block;
//   position: absolute;
//   top: ${props => (props.top ? props.top : 24)}px;
//   right: ${props => (props.right ? props.right : -4)}px;
// `

export const Ribbon = `
  ${FONT_FAMILY}
  font-size: 0.9rem;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border: solid 1px #002938;
  padding: 2px 15px;
  display: inline-block;
  position: absolute;
  top: 30px;
  right: -4px;
  }
`

export default styled.div`
  ${Ribbon};
`
