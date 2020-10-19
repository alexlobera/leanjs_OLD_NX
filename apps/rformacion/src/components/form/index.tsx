export { Input, Button, ErrorMessage } from '@leanjs/ui-core';
export { Form, Field, composeValidators } from '@leanjs/ui-final-form';

interface RequiredTypes {
  value: string | number;
  length: number;
}

export const required = (value: RequiredTypes) => {
  return !value || (Array.isArray(value) && !value.length)
    ? 'Campo obligatorio'
    : undefined;
};

export const mustBeEmail = (value: string) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reEmail.test(value)
    ? undefined
    : 'El formato del email no es correcto';
};
