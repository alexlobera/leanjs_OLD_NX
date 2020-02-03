import React from 'react'
import styled, { css } from 'styled-components'

import { WHITE, DARK_GREY, DARK_BLUE, RED } from '../../config/styles'
import Box from '../layout/Box'

// TODOSX MOVE THIS TO SX DEFAULT PROP
export const defaultButtonStyle = css`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${props =>
    props.disabled &&
    `
    :hover {
      cursor: not-allowed;
    }
  `}
`

// export const buttonDefaultProps = {
//   sx: {
//     py: 1,
//     px: 4,
//     boxShadow: 'light',
//     borderRadius: 2,
//     border: 0,
//     textAlign: 'center',
//     fontSize: 2,
//     letterSpacing: ' 0.6px',
//   },
//   //box: 'button',
// }

export const buttonDefaultSxProp = {
  py: 1,
  px: 4,
  boxShadow: 'light',
  borderRadius: 2,
  border: 0,
  textAlign: 'center',
  fontSize: 2,
  letterSpacing: ' 0.6px',
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
//StyledButton.defaultProps = buttonDefaultProps

const Button = ({
  children,
  loading,
  onClick,
  variant = 'default',
  sx = {},
  ...rest
}) => {
  const extendedProps = {
    ...rest,
    onClick: rest.disabled ? undefined : onClick,
  }

  return (
    <StyledButton
      type="button"
      box="button"
      sx={{
        ...buttonDefaultSxProp,
        ...(buttonVariantProps[variant] || {}),
        ...sx,
      }}
      {...extendedProps}
    >
      {loading ? 'Loading ...' : children}
    </StyledButton>
  )
}
// Button.defaultProps = {
//   //variant: 'default',
//   //...buttonDefaultProps,
// }

Button.displayName = 'Button'

export default Button
