import React, { useContext, useEffect, useState } from 'react';
import { memoize } from './memoize';

const ClientContext = React.createContext(null);

function hashGql(query, variables) {
  const body = JSON.stringify({ query, variables });

  return (
    '' +
    body.split('').reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0)
  );
}

const memoizedHashGql = memoize(hashGql);

export const GraphQLProvider = ({ children, link }) => {
  const [state, setState] = useState({});

  async function runQuery({ query, variables }) {
    const cacheKey = memoizedHashGql(query, variables);
    let result;

    try {
      const { data, errors } = await link.fetch({ query, variables });
      result = { data, errors };
    } catch (error) {
      result = { errors: [error.message] };
    }
    setState({ ...state, [cacheKey]: result });

    return result;
  }

  async function query({ query, variables }) {
    const cacheKey = memoizedHashGql(query, variables);
    const queryState = state[cacheKey];
    const { data } = queryState || {};
    if (data) {
      return { data, loading: false };
    }

    return await runQuery({ query, variables });
  }

  function readQuery({ query, variables }) {
    const cacheKey = memoizedHashGql(query, variables);

    return state[cacheKey]?.data;
  }

  function writeQuery({ query, variables, data }) {
    const cacheKey = memoizedHashGql(query, variables);
    setState({ ...state, [cacheKey]: { data } });
  }

  return (
    <ClientContext.Provider
      value={{
        state,
        setState,
        query,
        mutate: runQuery,
        readQuery,
        writeQuery,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

interface UseQueryOptions {
  variables: { [name: string]: any };
  skip?: boolean;
}
export function useQuery(query: string, options: UseQueryOptions) {
  const { variables, skip = false } = options || {};
  const client = useClient();
  const { state } = useContext(ClientContext);
  const cacheKey = memoizedHashGql(query, variables);
  const { errors, data } = (state && state[cacheKey]) || {};

  useEffect(() => {
    if (!skip) {
      client.query({ query, variables });
    }
  }, [cacheKey, skip]);

  return {
    data,
    loading: skip || data || errors?.length ? false : true,
    errors: errors?.length ? errors : null,
  };
}

export const useClient = () => {
  const client = useContext(ClientContext) || {};
  if (!client) {
    throw new Error(
      'No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider'
    );
  }

  function clearStore() {
    client.setState({});
  }

  return { ...client, clearStore };
};
