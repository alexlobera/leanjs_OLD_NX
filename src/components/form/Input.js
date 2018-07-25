import React from 'react'
import styled from 'styled-components'
import { WHITE, BROWN, GREY2 } from '../../config/styles'

export default styled.input`
  background-color: ${WHITE};
  display: block;
  width: 100%;
  padding: 11px 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: ${GREY2};
  background-clip: padding-box;
  border: 1px solid ${BROWN};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
