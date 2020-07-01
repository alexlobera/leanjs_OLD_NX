import React from 'react';
import isEqual from 'lodash.isequal';
import GraphQLProvider from './Provider';
import { createClient } from './client';

const MockedProvider = ({ children, mocks = [] }) => {
  const post = ({ query, variables }) => {
    const { result } =
      mocks.find(({ request }) => {
        return request.query === query &&
          isEqual(request.variables) === isEqual(variables)
          ? true
          : false;
      }) || {};

    if (!result) {
      throw new Error(`
It couldn't find a mock for query: ${query} and variables ${JSON.stringify(
        variables
      )}`);
    }

    return Promise.resolve(result);
  };
  const client = createClient({ post });

  return <GraphQLProvider client={client}>{children}</GraphQLProvider>;
};

export default MockedProvider;
