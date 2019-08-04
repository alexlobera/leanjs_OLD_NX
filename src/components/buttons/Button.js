import React from 'react'
import styled, { css } from 'styled-components'

import { WHITE, DARK_GREY, DARK_BLUE, RED } from '../../config/styles'
import Box from '../layout/Box'

export const defaultButtonStyle = css`
  cursor: pointer;
  align-items: center;
  ${props =>
    props.disabled &&
    `
    :hover {
      cursor: not-allowed;
    }
  `}
`

export const buttonDefaultProps = {
  py: 1,
  px: 4,
  boxShadow: 'light',
  borderRadius: 2,
  border: 0,
  textAlign: 'center',
  fontSize: 2,
  letterSpacing: ' 0.6px',
  variant: 'default',
  box: 'button',
}

export const buttonVariantProps = {
  primary: {
    color: WHITE,
    bg: RED,
    fontWeight: 'bold',
  },
  secondary: {
    color: WHITE,
    backgroundColor: DARK_BLUE,
  },
  default: {
    color: DARK_GREY,
    bg: WHITE,
    boxShadow: 'thin',
    border: '1px solid',
    textShadow: 'bold',
    borderColor: DARK_BLUE,
  },
}

const StyledButton = styled(Box)`
  ${defaultButtonStyle};
`

const Button = ({ children, loading, onClick, variant, ...rest }) => {
  const props = {
    ...rest,
    onClick: rest.disabled ? undefined : onClick,
  }

  return (
    <StyledButton
      {...buttonDefaultProps}
      type="button"
      {...(variant ? buttonVariantProps[variant] : {})}
      {...props}
    >
      {loading ? 'Loading ...' : children}
    </StyledButton>
  )
}

Button.displayName = 'Button'

export default Button
