import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import styled from 'styled-components';
import Box from '../Layout/Box';
import Flex from '../Layout/Flex';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

interface ParentProps {
  name: string;
  icon?: boolean;
  label?: string;
  value?: number | string;
  ref?: any;
  flex?: any;
}

type TextFieldProps = FieldRenderProps<string, HTMLElement> & ParentProps;
const styledTextFieldDefaultProps = {
  box: 'input',
  py: 1,
  pr: 2,
  mr: 4,
  pl: 2,
  fontFamily: 'serif',
  fontWeight: 'bold',
  maxWidth: 'normal',
  border: '0.05rem solid',
};

export const StyledTextField = styled(Box)`
  ::placeholder {
    font-style: ${(props) => props.theme.fontStyle.italic};
    color: ${(props) => props.theme.colors.GREY};
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }
`;

StyledTextField.displayName = 'StyledTextField';
StyledTextField.defaultProps = styledTextFieldDefaultProps;

const TextField = (
  { input, meta, label, icon, value, flex = {}, ...props }: TextFieldProps,
  ref: any
) => (
  <Flex {...flex} flexDirection="column">
    {label ? <Label htmlFor={input.name}>{label}</Label> : null}
    <StyledTextField {...input} {...props} ref={ref} />
    {meta && meta.error && meta.touched && (
      <ErrorMessage>{meta.error}</ErrorMessage>
    )}
  </Flex>
);

export default React.forwardRef(TextField);
