import React from 'react';
import { Box, SxProp, BoxProps, As } from './Box';
import { Label } from './Label';

interface InputFormProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  checked?: boolean;
}

function InputForm<T extends As = 'input'>(props: BoxProps<T, InputFormProps>) {
  return (
    <Box
      variant="input"
      as="input"
      {...props}
      __sx={{
        fontSize: 2,
        lineHeight: 2,
        p: 2,
        maxWidth: '100%',
        backgroundColor: 'background',
        display: 'block',
        width: '100%',
        color: 'text',
        backgroundClip: 'padding-box',
        border: '1px solid',
        borderColor: 'secondary',
      }}
      __themeKey="forms"
    />
  );
}

export const ErrorMessage = (props) => {
  return props.children ? (
    <Box
      variant="error"
      {...props}
      __sx={{
        m: 0,
        fontWeight: 'bold',
        backgroundColor: 'danger',
        py: 1,
        px: 2,
        fontSize: 0,
      }}
      __themeKey="forms"
    />
  ) : null;
};

export const FormGroup = (props) => (
  <Box
    {...props}
    __sx={{
      py: 2,
      display: 'block',
      maxWidth: '100%',
    }}
    __themeKey="forms"
  />
);

interface InputProps {
  name: string;
  label: string;
  type?: string;
  checked?: boolean;
  onChange?: (args: any) => void;
  input?: {
    name?: string;
    onChange?: (args: any) => void;
  };
  meta?: {
    invalid?: boolean;
    pristine?: boolean;
    error?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
  };
  color?: string;
  formGroupSx?: SxProp;
}

export function Input<T extends As>({
  label,
  type = 'text',
  checked = false,
  input = {},
  meta = {},
  color,
  sx = {},
  formGroupSx = {},
  ...props
}: BoxProps<T>) {
  const { invalid, pristine, error, submitFailed, submitSucceeded } = meta;
  const name = props.name || input.name;
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    input.onChange && input.onChange(e);
    props.onChange && props.onChange(e);
  };

  return (
    <FormGroup sx={formGroupSx}>
      {label ? (
        <React.Fragment>
          <Label sx={{ color }}>
            {label}
            <InputForm
              {...props}
              {...input}
              sx={{ mt: 2, ...sx }}
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
          sx={sx}
          onChange={onChange}
          type={type}
        />
      )}
      {(invalid && !pristine && error) || (submitFailed && error) ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : null}
    </FormGroup>
  );
}

// ❌ this doesn't work even without spreading {...props}
// const B = (props) => <Input fff id="aad" onClick={(e) => {}} />;
