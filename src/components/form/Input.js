import React from 'react'
import styled from 'styled-components'
import { WHITE, BROWN, DARK_GREY, DARK_BLUE, PINK } from '../../config/styles'
import Box from '../layout/Box'
import Label from '../text/Label'

const InputForm = styled(Box)`
  background-color: ${WHITE};
  display: block;
  width: 100%;
  color: ${DARK_GREY};
  background-clip: padding-box;
  border: 1px solid ${BROWN};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
InputForm.defaultProps = {
  sx: {
    fontSize: 2,
    lineHeight: 2,
    p: 1,
  },
  box: 'input',
}

export const ErrorMessage = styled(Box)`
  background-color: ${PINK};
`
ErrorMessage.defaultProps = {
  sx: {
    m: 0,
    fontWeight: 'bold',
    color: DARK_BLUE,
    py: 0,
    px: 1,
    fontSize: 0,
  },
}

export const FormGroup = styled(Box)`
  display: block;
`
FormGroup.defaultProps = {
  sx: {
    py: 1,
  },
}

const Input = ({
  label,
  type = 'text',
  checked = false,
  input = {},
  meta = {},
  color,
  ...props
}) => {
  const { invalid, pristine, error, submitFailed, submitSucceeded } = meta
  const name = props.name || input.name
  const onChange = e => {
    input.onChange && input.onChange(e)
    props.onChange && props.onChange(e)
  }

  return (
    <FormGroup>
      {label && input.name ? (
        <React.Fragment>
          <Label color={color}>
            {label}
            <InputForm
              {...props}
              {...input}
              onChange={onChange}
              type={type}
              name={name}
              checked={checked}
            />
          </Label>
        </React.Fragment>
      ) : (
        <InputForm {...props} {...input} onChange={onChange} type={type} />
      )}
      {(invalid && !pristine) || (submitFailed && !submitSucceeded) ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : null}
    </FormGroup>
  )
}

export default Input
