import React, { useReducer, useContext, useEffect } from 'react';
import { memoize } from './memoize';
const RECEIVE_DATA = 'RECEIVE_DATA';
const CLEAR_CACHE = 'CLEAR_CACHE';
const SET_LOADING = 'SET_LOADING';

const StoreContext = React.createContext(null);
const ClientContext = React.createContext(null);

function hashGql(query, variables) {
  const body = JSON.stringify({ query, variables });

  return body.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
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
    case CLEAR_CACHE:
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

  async function query({ query, variables }) {
    const cacheKey = memoizedHashGql(query, variables);
    const queryState = state[cacheKey];
    const { data } = queryState || {};
    if (data) {
      return { data, loading: false };
    }

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

  async function mutate({ query, variables }) {
    // mutation assumes the state of the client doesn't change after the mutation
    const cacheKey = memoizedHashGql(query, variables);
    dispatch(SET_LOADING, { cacheKey, loading: false });

    let result;
    try {
      const { errors, data } = await link.fetch({ query, variables });
      result = { errors, data, loading: false };
    } catch (error) {
      result = { errors: [error.message], loading: false };
    }

    dispatch(RECEIVE_DATA, { [cacheKey]: result });

    return result;
  }

  const client = React.useMemo(() => ({ query, mutate }), [link]);

  return (
    <ClientContext.Provider value={{ client }}>
      <StoreContext.Provider value={[state, dispatch]}>
        {children}
      </StoreContext.Provider>
    </ClientContext.Provider>
  );
};

interface UseQueryOptions {
  variables: { [name: string]: any };
  skip?: boolean;
}
export const useQuery = (query, options: UseQueryOptions) => {
  const { variables, skip = false } = options || {};
  const { client } = useClient();
  const [state, dispatch] = useContext(StoreContext);
  const cacheKey = memoizedHashGql(query, variables);
  const { loading, errors, data } = (state && state[cacheKey]) || {};

  useEffect(() => {
    if (skip) {
      // TODO does apollo client set the loading to false if the use skips the quey?
      // dispatch(SET_LOADING, { cacheKey, loading: false });
    } else {
      client.query({ query, variables });
    }
  }, [query, variables, cacheKey, dispatch, skip]);

  return {
    data,
    loading: loading === undefined ? true : loading,
    errors: errors?.length ? errors : null,
  };
};

export const useClient = () => {
  const { client } = useContext(ClientContext) || {};
  if (!client) {
    throw new Error(
      'No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider'
    );
  }

  return { client };
};

export const useGraphQLStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      'No GraphQL Provider found, please make sure that you are providing a GraphQL Provider upper in the component tree'
    );
  }

  const [cache, dispatch] = context;

  function clearStore() {
    dispatch(CLEAR_CACHE);
  }

  return { cache, clearStore };
};
