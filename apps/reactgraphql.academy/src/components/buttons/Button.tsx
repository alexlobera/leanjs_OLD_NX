import * as React from 'react';
import { Button as LeanButton } from '@leanjs/ui-core';

export const buttonDefaultSxProp = {
  py: 1,
  px: 4,
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: 'light',
  borderRadius: 2,
  border: 0,
  textAlign: 'center' as AlignSetting, // is there a better way to fix the type here?
  fontSize: 2,
  letterSpacing: '0.6px',
};

// TODO add styles for disabled prop true
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
};

export const Button = function (props) {
  const {
    children,
    loadingElement,
    onClick,
    variant = 'default',
    sx = {},
    as = 'button',
    ref,
    ...rest
  } = props;
  return (
    <LeanButton
      type="button"
      as={as}
      {...props}
      sx={{
        ...buttonDefaultSxProp,
        ...(buttonVariantProps[variant] || {}),
        ...sx,
      }}
      onClick={rest.disabled ? undefined : onClick}
      children={loadingElement ? loadingElement : children}
    />
  );
};

export default Button;
