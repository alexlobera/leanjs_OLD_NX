import React from 'react'
import styled from 'styled-components'

export default styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border: solid 1px #002938;
  padding: 2px 15px;
  display: inline-block;
  position: absolute;
  top: ${props => (props.top ? props.top : 24)}px;
  right: ${props => (props.right ? props.right : -4)}px;
`
