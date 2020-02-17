import React from 'react'
import styled from 'styled-components'
import Box from '../layout/Box'

export const buttonDefaultSxProp = {
  py: 1,
  px: 4,
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: 'light',
  borderRadius: 2,
  border: 0,
  textAlign: 'center',
  fontSize: 2,
  letterSpacing: '0.6px',
}

export const buttonVariantProps = {
  primary: {
    color: 'lightText',
    bg: 'primary',
    fontWeight: 'bold',
  },
  secondary: {
    color: 'lightText',
    backgroundColor: 'secondary',
  },
  default: {
    color: 'text',
    bg: 'background',
    boxShadow: 'thin',
    border: '1px solid',
    textShadow: 'bold',
    borderColor: 'secondary',
  },
}

const StyledButton = styled(Box)`
  ${props =>
    props.disabled &&
    `
    :hover {
      cursor: not-allowed;
    }
  `}
`

const Button = ({
  children,
  loadingText,
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
      {loadingText ? loadingText : children}
    </StyledButton>
  )
}

Button.displayName = 'Button'

export default React.memo(Button)
