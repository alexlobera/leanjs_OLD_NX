import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import Box, { BoxProps } from '../Layout/Box';

type ErrorMessageProps = StyledComponentProps<any, {}, {}, any> & BoxProps;

const StyledErrorMessage = styled(Box)<ErrorMessageProps>``;
StyledErrorMessage.defaultProps = {
  box: 'span',
  color: 'RED',
  fontFamily: 'serif',
};

const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <StyledErrorMessage>{children}</StyledErrorMessage>
);

export default ErrorMessage;
