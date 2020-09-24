import React, { ReactNode } from 'react';
import { FieldRenderProps } from 'react-final-form';

import Box from '../Layout/Box';
import Flex from '../Layout/Flex';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

interface ParentProps {
  name?: string;
  icon?: ReactNode;
  label?: ReactNode;
  showError: boolean;
  input: any;
}
type RadioFieldProps = FieldRenderProps<string, HTMLElement> & ParentProps;
const RadioField = ({
  input,
  meta,
  label,
  showError,
  ...props
}: RadioFieldProps) => (
  <Label htmlFor={props.name} mt={0}>
    <Flex alignItems="center">
      <Box
        as="input"
        fontFamily="serif"
        type="radio"
        mr={1}
        {...input}
        {...props}
      />
      {label}
    </Flex>
    {showError && meta && meta.error && meta.touched && (
      <ErrorMessage>{meta.error}</ErrorMessage>
    )}
  </Label>
);

export default RadioField;
