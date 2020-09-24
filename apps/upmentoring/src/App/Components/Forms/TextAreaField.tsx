import React from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';

import Flex from '../Layout/Flex';
import Label from './Label';
import Box from '../Layout/Box';
import ErrorMessage from './ErrorMessage';

interface ParentProps {
  name: string;
  icon?: boolean;
  label?: string;
  noborder?: boolean;
}

type TextAreaFieldProps = FieldRenderProps<string, HTMLElement> & ParentProps;

const StyledTextAreaField = styled(Box)`
  ::placeholder {
    font-style: ${props => props.theme.fontStyle.italic};
    color: ${props => props.theme.colors.GREY};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
`;

StyledTextAreaField.defaultProps = {
  box: 'textarea',
  fontFamily: 'serif',
  mr: 3,
  fontWeight: 'bold',
  maxWidth: 'full',
  minHeight: '8.5rem',
};

const TextAreaField = ({
  input,
  meta,
  label,
  noborder,
  ...props
}: TextAreaFieldProps) => (
  <Flex flexDirection="column">
    {label ? <Label htmlFor={props.name}>{label}</Label> : null}
    <StyledTextAreaField
      py={noborder ? 0 : 1}
      px={noborder ? 0 : 2}
      border={noborder ? 'none' : '0.05rem solid'}
      borderColor={noborder ? 'none' : 'GREY'}
      {...input}
      {...props}
    />
    {meta && meta.error && meta.touched && (
      <ErrorMessage>{meta.error}</ErrorMessage>
    )}
  </Flex>
);

export default TextAreaField;
