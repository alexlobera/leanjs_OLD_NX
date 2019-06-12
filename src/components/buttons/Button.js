import styled, { css } from 'styled-components'
import { FONT_FAMILY, DARK_GREY } from '../../config/styles'
import { variant } from 'styled-system'

export const defaultButtonStyle = color => css`
  ${FONT_FAMILY}
  font-size: 1rem;
  font-weight: 400; 
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
  color: ${color};
  /* ${variant({ key: 'buttons' })}; */
`

export const buttonDefaultProps = {
  py: 1,
  px: 3,
  borderRadius: 1,
  border: 0,
  variant: 'default',
  box: 'button',
}

const buttonVariantProps = {
  primary: {
    color: color.WHITE,
    backgroundColor: color.GREEN_DARK,
    fontSize: '2',
    lineHeight: '2',
    fontStyle: 'normal',
    fontWeight: 'bold',
    boxShadow$: 'light',
  },
  secondary: {
    color: color.WHITE,
    backgroundColor: color.TEAL_DARK,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 'light',
    boxShadow$: 'light',
  },
  tertiary: {
    color: color.GREY_DARK,
    backgroundColor: color.WHITE,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 'normal',
    boxShadow$: 'light',
  },
}

const StyledButton = styled(Box)`
  ${defaultButtonStyle(DARK_GREY)};
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
