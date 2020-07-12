import React from 'react';
import { Box, BoxProps } from './Box';
import { Label } from './Label';

const InputForm = ({ as = 'input', sx = {}, ...rest }: BoxProps) => (
  <Box
    sx={{
      backgroundColor: 'background',
      display: 'block',
      width: '100%',
      color: 'text',
      backgroundClip: 'padding-box',
      border: '1px solid',
      borderColor: 'secondary',
      ...sx,
    }}
    as={as}
    {...rest}
  />
);

const defaultInputSxProp = {
  fontSize: 2,
  lineHeight: 2,
  p: 1,
  maxWidth: '100%',
};

export const ErrorMessage = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      m: 0,
      fontWeight: 'bold',
      backgroundColor: 'danger',
      color: 'secondary',
      py: 0,
      px: 1,
      fontSize: 0,
      ...sx,
    }}
    {...rest}
  />
);

export const FormGroup = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      py: 1,
      display: 'block',
      maxWidth: '100%',
      ...sx,
    }}
    {...rest}
  />
);

interface InputProps {
  label: string;
  name: string;
  type: string;
  checked: boolean;
  onChange?: (args: any) => void;
  input: {
    name?: string;
    onChange?: (args: any) => void;
  };
  meta: {
    invalid?: boolean;
    pristine?: boolean;
    error?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
  };
  color: string;
  sx: any;
  formGroupSx: any;
}

export const Input = ({
  label,
  type = 'text',
  checked = false,
  input = {},
  meta = {},
  color,
  sx = {},
  formGroupSx = {},
  ...props
}: InputProps) => {
  const { invalid, pristine, error, submitFailed, submitSucceeded } = meta;
  const name = props.name || input.name;
  const onChange = (e: Event) => {
    input.onChange && input.onChange(e);
    props.onChange && props.onChange(e);
  };
  const extendedSx = { ...defaultInputSxProp, ...sx };

  return (
    <FormGroup sx={formGroupSx}>
      {label ? (
        <React.Fragment>
          <Label sx={{ color }}>
            {label}
            <InputForm
              {...props}
              {...input}
              sx={{ mt: 1, ...extendedSx }}
              onChange={onChange}
              type={type}
              name={name}
              checked={checked}
            />
          </Label>
        </React.Fragment>
      ) : (
        <InputForm
          {...props}
          {...input}
          sx={extendedSx}
          onChange={onChange}
          type={type}
        />
      )}
      {(invalid && !pristine) || (submitFailed && !submitSucceeded) ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : null}
    </FormGroup>
  );
};
