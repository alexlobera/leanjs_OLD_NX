import React from 'react';
import Box from '../layout/Box';
import Label from '../text/Label';

const InputForm = ({ sx = {}, ...rest }) => (
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

const Input = ({
  label,
  type = 'text',
  checked = false,
  input = {},
  meta = {},
  color,
  sx = {},
  formGroupSx = {},
  ...props
}) => {
  const {
    invalid,
    touched,
    error,
    submitFailed,
    submitSucceeded,
    ...rest
  } = meta;
  const name = props.name || input.name;
  const onChange = (e) => {
    input.onChange && input.onChange(e);
    props.onChange && props.onChange(e);
  };
  const extendedSx = { ...defaultInputSxProp, ...sx };

  return (
    <FormGroup sx={formGroupSx}>
      {label && input.name ? (
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
      {(invalid && touched) || (submitFailed && !submitSucceeded) ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : null}
    </FormGroup>
  );
};
Input.defaultProps = {
  box: 'input',
};

export default Input;
