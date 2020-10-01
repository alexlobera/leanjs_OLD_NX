import React from 'react';
import { Form as StateForm } from 'react-final-form';
import { Config } from 'final-form';
import { Box, BoxProps, As } from '@leanjs/ui-core';

export * from './validators';
export { Field } from 'react-final-form';

interface AnyObject {
  [key: string]: any;
}

interface ExtendedBoxProps {
  autoComplete?: 'on' | 'off';
  noValidate?: boolean;
  name?: string;
}

interface FormProps<FormValues = AnyObject> extends ExtendedBoxProps, Config {
  children?: (props: FormValues) => React.ReactNode;
  render?: (props: FormValues) => React.ReactNode;
}

export const Form = <T extends As = 'form'>({
  children,
  render,
  autoComplete,
  noValidate,
  name,
  sx,
  onSubmit,
  ...rest
}: BoxProps<T, FormProps>) => {
  const renderProp = render || children;

  return (
    <StateForm
      {...rest}
      onSubmit={onSubmit}
      render={({ handleSubmit, ...renderRest }) => (
        <Box
          autoComplete={autoComplete}
          noValidate={noValidate}
          sx={sx}
          as="form"
          name={name}
          onSubmit={handleSubmit}
        >
          {renderProp(renderRest)}
        </Box>
      )}
    />
  );
};
