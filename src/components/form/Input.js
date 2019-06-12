import React from 'react'
import styled from 'styled-components'
import {
  WHITE,
  BROWN,
  DARK_GREY,
  FONT_FAMILY,
  blue1,
  PINK,
} from '../../config/styles'

const Label = styled.label`
  ${FONT_FAMILY};
`
const InputForm = styled.input`
  ${FONT_FAMILY};
  background-color: ${WHITE};
  display: block;
  width: 100%;
  padding: 11px 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: ${DARK_GREY};
  background-clip: padding-box;
  border: 1px solid ${BROWN};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const ErrorMessage = styled.p`
  font-size: 0.77rem;
  padding: 0 8px;
  color: ${blue1()};
  background-color: ${PINK};
  ${FONT_FAMILY};
  font-weight: bold;
  margin-bottom: 0;
`

export const FormGroup = styled.div`
  padding: 8px 0;
  display: block;
`

const Input = ({
  label,
  type = 'text',
  checked = false,
  input = {},
  meta = {},
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
          <Label>
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
