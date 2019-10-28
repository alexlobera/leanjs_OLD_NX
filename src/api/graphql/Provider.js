import React, { useReducer, useContext } from 'react'

const RECEIVE_DATA = 'RECEIVE_DATA'
const SET_ERRORS = 'SET_ERRORS'
const SET_LOADING = 'SET_LOADING'

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data,
})

export const setErrors = errors => ({
  type: SET_ERRORS,
  errors,
})

const StoreContext = React.createContext()
const ClientContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading }
    case RECEIVE_DATA:
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.data },
      }
    case SET_ERRORS:
      return { ...state, loading: false, errors: action.errors }
    default:
      return state
  }
}

const GraphQLProvider = ({
  children,
  client,
  initialState = {
    data: {},
    errors: null,
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

export const useStatelessClient = () => {
  const { client } = useContext(ClientContext) || {}

  if (!client) {
    throw new Error(
      'No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider'
    )
  }

  return { query: client() }
}

export const useClient = () => {
  const { client } = useContext(ClientContext) || {}
  const [state, dispatch] = useContext(StoreContext)

  if (!dispatch) {
    throw new Error(
      'No GraphQL Provier found, please make sure that you are using the GraphQL Provider in the component tree'
    )
  }

  if (!client) {
    throw new Error(
      'No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider'
    )
  }

  // should I use useMemo for this newDispatch
  const newDispatch = (action = {}) => {
    const { type, query, variables } = action
    switch (type) {
      case 'GRAPHQL_QUERY':
        client([state, dispatch])({ query, variables })
        break
      default:
        dispatch(action)
        break
    }
  }

  return [state, newDispatch]
}

export default GraphQLProvider
