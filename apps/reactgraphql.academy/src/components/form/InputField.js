import React from 'react';
import { Field } from '@leanjs/ui-final-form';
import Input from './Input';

const InputField = (props) => <Field {...props} component={Input} />;

export default InputField;
