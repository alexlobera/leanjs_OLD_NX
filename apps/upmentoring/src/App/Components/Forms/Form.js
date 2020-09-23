import React from 'react';
import styled from 'styled-components';
import { Form as StateForm } from 'react-final-form';

import Box from '../Layout/Box';

const StyledForm = styled(Box)``;

const Form = ({ children, ...rest }) => {
  return (
    <StateForm
      {...rest}
      render={({ handleSubmit, ...renderRest }) => (
        <StyledForm as="form" onSubmit={handleSubmit}>
          {children(renderRest)}
        </StyledForm>
      )}
    />
  );
};

export default React.memo(Form);
