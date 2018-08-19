import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import Input from './Input'

const FieldInput = props => <Field {...props} component={Input} />

export default FieldInput