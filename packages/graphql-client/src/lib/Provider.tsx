import React, { useReducer, useContext, useEffect } from 'react';
import memoize from './memoize';
const RECEIVE_DATA = 'RECEIVE_DATA';
const SET_ERROR = 'SET_ERROR';
const CLEAR_CACHE = 'CLEAR_CACHE';
const SET_LOADING = 'SET_LOADING';

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

export const setErrors = (errors) => ({
  type: SET_ERROR,
  errors,
});

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
        loading: false,
        errors: action.payload.errors,
        data: { ...state.data, ...action.payload.data },
      };
    case SET_ERROR:
      return { ...state, loading: false, errors: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case CLEAR_CACHE:
      return action.payload;
    default:
      return state;
  }
};

export const GraphQLProvider = ({
  children,
  link,
  initialState = {
    data: {},
    errors: null,
    loading: true,
  },
}) => {
  const [state, rawDispatch] = useReducer(reducer, initialState);
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
    const data = state[cacheKey];
    if (data) {
      // dispatch(SET_LOADING, false);
      return { data };
    }

    dispatch(SET_LOADING, true);
    try {
      const { data, errors } = await link.fetch({ query, variables });
      const payload = { data: { [cacheKey]: data }, errors };
      dispatch(RECEIVE_DATA, payload);

      return { data, errors };
    } catch (error) {
      const payload = [error.message];
      dispatch(SET_ERROR, payload);

      return payload;
    }
  }

  async function mutate({ query, variables }) {
    // mutation assumes the UI state doesn't change after the mutation
    dispatch(SET_LOADING, true);

    try {
      const { errors, data } = await link.fetch({ query, variables });
      const payload = { errors };
      dispatch(RECEIVE_DATA, payload);

      return { data, errors };
    } catch (error) {
      const payload = [error.message];
      dispatch(SET_ERROR, payload);

      return payload;
    }
  }

  const client = React.useMemo(
    () => ({
      query,
      mutate,
    }),
    [link]
  );

  return (
    <ClientContext.Provider value={{ client }}>
      <StoreContext.Provider value={[state, dispatch, { initialState }]}>
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
  const { loading, errors, data: cache } = state;
  const cacheKey = memoizedHashGql(query, variables);
  const data = cache && cache[cacheKey];

  useEffect(() => {
    if (data || skip) {
      dispatch(SET_LOADING, false);
    } else {
      client.query({ query, variables });
    }
  }, [query, variables, data, skip, dispatch, query]);

  return { data, loading, errors: errors?.length ? errors : null };
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

  const [cache, dispatch, { initialState }] = context;

  function clearStore() {
    dispatch(CLEAR_CACHE, initialState);
  }

  return { cache, clearStore }; // TODO RENAME IT TO clearStore LIKE APOLLO
};
