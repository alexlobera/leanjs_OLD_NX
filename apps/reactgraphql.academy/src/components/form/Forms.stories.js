import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, FormGroup, ErrorMessage } from './Input';
import { InputField } from './InputField';
import { CheckboxField } from './CheckboxField';

storiesOf('Atoms | Form Elements', module)
  .add('Error Message', () => (
    <ErrorMessage>This is an error message</ErrorMessage>
  ))
  .add('Checkbox Field', () => <CheckboxField />)
  .add('Input Field', () => <InputField />);
