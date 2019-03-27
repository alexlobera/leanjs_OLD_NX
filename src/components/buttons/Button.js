import React from 'react'
import styled, { css } from 'styled-components'
import { blue1, WHITE, CALLTOACTIONRED, FONT_FAMILY } from '../../config/styles'
import { variant } from 'styled-system'

const buttonsStyle = variant({
  key: 'buttons',
})

export const DEFAULT_BUTTON_STYLE = css`
  ${buttonsStyle};
  font-size: 1rem;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  align-items: flex-start;
  text-align: center;
  padding: 13px 25px;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 18px 29px -2px rgba(0, 0, 0, 0.26);
  color: ${WHITE};
  ${props => (props.block ? 'width: 100%;' : 'display: inline-block;')}
  ${props => (props.right ? `margin-left:auto;` : null)}
  ${props =>
    props.disabled
      ? `
    border-color: rgba(255, 255, 255, 0.2);
    :hover {
      cursor: not-allowed;
    }
  `
      : ''}
`

export default styled.button`
  ${DEFAULT_BUTTON_STYLE} ${FONT_FAMILY};
`

export const InputButton = styled.input.attrs({
  type: 'submit',
})`
  ${DEFAULT_BUTTON_STYLE} ${FONT_FAMILY};
  border-color: rgba(0, 0, 0, 0);
`
