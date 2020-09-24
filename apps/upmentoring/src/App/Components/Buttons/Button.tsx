import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledComponentProps } from 'styled-components';

import colors from '../../Config/colors';
import { boxShadow } from '../../Config/theme';

import Box, { BoxProps } from '../Layout/Box';
import buttonVariantProps, { ButtonVariantProps } from './buttonVariant';

type StyledButtonProps = StyledComponentProps<any, {}, {}, any> &
  BoxProps & { variant?: keyof ButtonVariantProps };

export const buttonDefaultProps = {
  py: 1,
  px: 3,
  mt: 2,
  border: 0,
  variant: 'default',
  box: 'button',
  boxShadow$: 'normal',
  boxShadowColor$: colors.GREY,
};

export const StyledButton = styled(Box) <StyledButtonProps>`
  appearance: none !important;
  text-decoration: none;
  ${({ disabled, loading }) =>
    disabled || loading
      ? `&:hover { cursor: not-allowed; }`
      : `&:hover { cursor: pointer; }`}
  ${boxShadow}
`;

export type ButtonProps = StyledButtonProps & {
  iconElement?: ReactNode;
  type?: string;
  loading?: boolean;
  variant?: string;
  value?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  iconElement,
  loading,
  onClick,
  variant,
  ...rest
}: ButtonProps) => {
  const props = {
    ...rest,
    onClick: rest.disabled ? undefined : onClick,
  };

  return (
    <StyledButton
      {...buttonDefaultProps}
      type="button"
      {...(variant ? buttonVariantProps[variant] : {})}
      {...props}
    >
      {iconElement || null}
      {loading ? 'Loading ...' : children}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export default Button;
