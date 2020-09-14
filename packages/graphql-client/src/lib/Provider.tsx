import React, { useReducer, useContext, useEffect } from 'react';
import { memoize } from './memoize';

const RECEIVE_DATA = 'RECEIVE_DATA';
const CLEAR_STORE = 'CLEAR_STORE';
const SET_LOADING = 'SET_LOADING';
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

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOADING: {
      const { cacheKey, loading } = action.payload;
      return {
        ...state,
        ...{ [cacheKey]: { ...(state[cacheKey] || {}), loading } },
      };
    }
    case CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

export const GraphQLProvider = ({ children, link }) => {
  const [state, rawDispatch] = useReducer(reducer, {});
  const dispatch = React.useCallback(
    (type, payload) =>
      rawDispatch({
        type,
        payload,
      }),
    []
  );

  async function runQuery({ query, variables }) {
    const cacheKey = memoizedHashGql(query, variables);

    dispatch(SET_LOADING, { cacheKey, loading: true });

    let result;
    try {
      const { data, errors } = await link.fetch({ query, variables });
      result = { data, errors, loading: false };
    } catch (error) {
      result = { errors: [error.message], loading: false };
    }
    dispatch(RECEIVE_DATA, { [cacheKey]: result });

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

  return (
    <ClientContext.Provider
      value={{ state, dispatch, query, mutate: runQuery }}
    >
      {children}
    </ClientContext.Provider>
  );
};

interface UseQueryOptions {
  variables: { [name: string]: any };
  skip?: boolean;
}
export const useQuery = (query: string, options: UseQueryOptions) => {
  const { variables, skip = false } = options || {};
  const client = useClient();
  const { state } = useContext(ClientContext);
  const cacheKey = memoizedHashGql(query, variables);
  const { loading, errors, data } = (state && state[cacheKey]) || {};

  useEffect(() => {
    if (skip) {
      // TODO does Apollo Client set loading to false if the user skips the query?
      // dispatch(SET_LOADING, { cacheKey, loading: false });
    } else {
      client.query({ query, variables });
    }
  }, [query, variables, skip]);

  return {
    data,
    loading: loading === undefined ? !data : loading,
    errors: errors?.length ? errors : null,
  };
};

export const useClient = () => {
  const client = useContext(ClientContext) || {};
  if (!client) {
    throw new Error(
      'No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider'
    );
  }

  function clearStore() {
    client.dispatch(CLEAR_STORE);
  }

  return { ...client, clearStore };
};
