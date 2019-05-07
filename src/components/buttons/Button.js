import styled, { css } from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'
import { variant } from 'styled-system'

export const defaultButtonStyle = css`
  ${FONT_FAMILY}
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 18px 29px -2px rgba(0, 0, 0, 0.26);
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  align-items: flex-start;
  text-align: center;
  padding: 13px 25px;
  border-radius: 2px;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0);
  ${props => (props.block ? 'width: 100%;' : 'display: inline-block;')}
  ${props => (props.right ? `margin-left:auto;` : null)}
  ${props =>
    props.disabled &&
    `
    :hover {
      cursor: not-allowed;
    }
  `}

  ${variant({ key: 'buttons' })};
`

export default styled.button`
  ${defaultButtonStyle};
`
