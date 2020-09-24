import React from "react";
import styled from "styled-components";

import { RadioField, Field } from "../../../../App/Components/Forms";
import { P } from "../../../../App/Components/Text";
import { required } from "../../../../App/Components/Forms/validators";
import { ErrorMessage, Avatar, Flex } from "../../../../App";

const ErrorMessageField = ({ name }) => (
  <Field
    name={name}
    validate={required}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? (
        <P center>
          <ErrorMessage>{error}</ErrorMessage>
        </P>
      ) : null
    }
  />
);

const RatingContainer = styled.div`
  padding: 20px 0;
`;

const RatingField = ({ name, children, label, avatarSrc }) => (
  <RatingContainer>
    <Flex alignItems="center" mt={1}>
      {avatarSrc && <Avatar src={avatarSrc} thumbnail />}
      {label}
    </Flex>
    <Flex mt={1} justifyContent="space-around">
      <span>
        Strongly
        <br />
        disagree
      </span>
      {[...Array(5).keys()].map(index => {
        const number = index + 1;
        return (
          <Field
            name={name}
            component={RadioField}
            type="radio"
            showError={false}
            value={`${number}`}
            label={number}
          />
        );
      })}
      <span>
        Strongly
        <br />
        agree
      </span>
    </Flex>
    <ErrorMessageField name={name} />
    {children}
  </RatingContainer>
);

export default RatingField;
