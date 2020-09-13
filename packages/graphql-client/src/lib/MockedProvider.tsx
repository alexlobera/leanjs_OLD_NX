import React from 'react';
import isEqual from 'lodash.isequal';
import { GraphQLProvider } from './Provider';

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// TODO REFACTOR THIS FILE TO USE createHttpLink

export const MockedProvider = ({ children, mocks = [] }) => {
  const fetch = ({ query, variables }) => {
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

  return <GraphQLProvider link={{ fetch }}>{children}</GraphQLProvider>;
};
