import React from 'react';
import { Field } from '@leanjs/ui-final-form';
import { Input } from '@leanjs/ui-core';

const InputField = (props) => <Field {...props} component={Input} />;

export default InputField;
