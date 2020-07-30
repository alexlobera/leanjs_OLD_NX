import React, { useReducer, useContext, useEffect } from 'react';
import { useMagic } from '../../components/auth/MagicProvider';
import memoize from './memoize';
const RECEIVE_DATA = 'RECEIVE_DATA';
const SET_ERROR = 'SET_ERROR';
const CLEAR_CACHE = 'CLEAR_CACHE';

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

export const setErrors = (error) => ({
  type: SET_ERROR,
  error,
});

const StoreContext = React.createContext();
const ClientContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: { ...state.data, ...action.payload },
      };
    case SET_ERROR:
      return { ...state, loading: false, error: action.error };
    case CLEAR_CACHE:
      // TODO NOT WORKING
      return action.initialState;
    default:
      return state;
  }
};

const GraphQLProvider = ({
  children,
  client,
  initialState = {
    data: {},
    error: null,
    loading: true,
  },
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ClientContext.Provider value={{ client }}>
      <StoreContext.Provider value={[state, dispatch, { initialState }]}>
        {children}
      </StoreContext.Provider>
    </ClientContext.Provider>
  );
};

function hashGql(query, variables, options) {
  const body = JSON.stringify({ query, variables, options });

  return body.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}

const memoizedHashGql = memoize(hashGql);

export const useQuery = (query, { variables } = {}) => {
  const { client } = useClient();
  const { loggedIn } = useMagic();
  const [state, dispatch] = useContext(StoreContext);
  const { loading, error, data: cache } = state;
  const cacheKey = memoizedHashGql(query, variables, loggedIn);
  const data = cache && cache[cacheKey];

  useEffect(() => {
    if (data) {
      return;
    }

    client
      .query({ query, variables })
      .then(({ data, error }) => {
        dispatch({
          type: RECEIVE_DATA,
          payload: { [cacheKey]: data, error },
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_ERROR,
          error,
        });
      });
  }, [query, cacheKey, variables, dispatch, data]); // do I need dispatch here if it comes from useReducer?

  return { data, loading, error };
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

export const useGraphQLCache = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      'No GraphQL Provider found, please make sure that you are providing a GraphQL Provider upper in the component tree'
    );
  }

  const [cache, dispatch, { initialState }] = context;

  function clearCache() {
    dispatch({ type: CLEAR_CACHE, initialState });
  }

  return { cache, clearCache };
};

export default GraphQLProvider;
