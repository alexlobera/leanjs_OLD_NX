import React from 'react'
import styled from 'styled-components'
import { WHITE, BROWN, DARK_GREY, DARK_BLUE, PINK } from '../../config/styles'
import { Box } from '@leanjs/academy-ui'
import Label from '../text/Label'

// TODOSX MOVE ALL THIS CSS TO SX PROP
const InputForm = styled(Box)`
  background-color: ${WHITE};
  display: block;
  width: 100%;
  color: ${DARK_GREY};
  background-clip: padding-box;
  border: 1px solid ${BROWN};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
// InputForm.defaultProps = {
//   sx: {
//     fontSize: 2,
//     lineHeight: 2,
//     p: 1,
//   },
//   box: 'input',
// }

const defaultInputSxProp = {
  fontSize: 2,
  lineHeight: 2,
  p: 1,
}

export const ErrorMessage = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      m: 0,
      fontWeight: 'bold',
      backgroundColor: PINK,
      color: DARK_BLUE,
      py: 0,
      px: 1,
      fontSize: 0,
      ...sx,
    }}
    {...rest}
  />
)

export const FormGroup = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      py: 1,
      display: 'block',
      ...sx,
    }}
    {...rest}
  />
)

const Input = ({
  label,
  type = 'text',
  checked = false,
  input = {},
  meta = {},
  color,
  sx = {},
  ...props
}) => {
  const { invalid, pristine, error, submitFailed, submitSucceeded } = meta
  const name = props.name || input.name
  const onChange = e => {
    input.onChange && input.onChange(e)
    props.onChange && props.onChange(e)
  }
  const extendedSx = { ...defaultInputSxProp, ...sx }

  return (
    <FormGroup>
      {label && input.name ? (
        <React.Fragment>
          <Label sx={{ color }}>
            {label}
            <InputForm
              {...props}
              {...input}
              sx={extendedSx}
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
  )
}
Input.defaultProps = {
  box: 'input',
}

export default Input
