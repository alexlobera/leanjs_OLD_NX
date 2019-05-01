import React from 'react'
import { Field } from 'react-final-form'
import Input from './Input'

const InputField = props => <Field {...props} component={Input} />

export default InputField
