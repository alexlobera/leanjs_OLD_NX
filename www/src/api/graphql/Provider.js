import React, { useReducer, useContext, useEffect } from 'react'
import { memoize } from './client'
const RECEIVE_DATA = 'RECEIVE_DATA'
const SET_ERROR = 'SET_ERROR'

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data,
})

export const setErrors = error => ({
  type: SET_ERROR,
  error,
})

const StoreContext = React.createContext()
const ClientContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: { ...state.data, ...action.payload },
      }
    case SET_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

const GraphQLProvider = ({
  children,
  client,
  initialState = {
    data: {},
    error: null,
    loading: true,
  },
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ClientContext.Provider value={{ client }}>
      <StoreContext.Provider value={[state, dispatch]}>
        {children}
      </StoreContext.Provider>
    </ClientContext.Provider>
  )
}

function hash(query, variables) {
  const body = JSON.stringify({ query, variables })

  return body.split('').reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)
}

const memoizedHash = memoize(hash)

export const useQuery = (query, { variables }) => {
  const { client } = useClient()
  const [state, dispatch] = useContext(StoreContext)
  const { loading, error, data: cache } = state
  const cacheKey = memoizedHash(query, variables)
  const data = cache && cache[cacheKey]

  useEffect(() => {
    if (data) {
      return
    }

    client
      .query({ query, variables })
      .then(({ data, error }) => {
        dispatch({
          type: RECEIVE_DATA,
          payload: { [cacheKey]: data, error },
        })
      })
      .catch(error =>
        dispatch({
          type: SET_ERROR,
          error,
        })
      )
  }, [query, cacheKey, variables, dispatch, data]) // do I need dispatch here if it comes from useReducer?

  return { data, loading, error }
}

export const useClient = () => {
  const { client } = useContext(ClientContext) || {}
  if (!client) {
    throw new Error(
      'No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider'
    )
  }

  return { client }
}

export default GraphQLProvider
