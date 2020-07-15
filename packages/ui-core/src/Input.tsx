import React, { FunctionComponent } from 'react';
import { Box, BoxProps, SxProp, LeanProps, As } from './Box';
import { Label } from './Label';

interface InputFormProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  checked?: boolean;
}

function InputForm<T extends As = 'input'>(
  props: LeanProps<T, InputFormProps>
) {
  return (
    <Box
      {...props}
      sx={{
        backgroundColor: 'background',
        display: 'block',
        width: '100%',
        color: 'text',
        backgroundClip: 'padding-box',
        border: '1px solid',
        borderColor: 'secondary',
        ...(props.sx || {}),
      }}
      as={props.as || 'input'}
    />
  );
}

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
}: LeanProps<T>) {
  const { invalid, pristine, error, submitFailed, submitSucceeded } = meta;
  const name = props.name || input.name;
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
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
}

// ❌ this doesn't work even without spreading {...props}
// const B = (props) => <Input fff id="aad" onClick={(e) => {}} />;
