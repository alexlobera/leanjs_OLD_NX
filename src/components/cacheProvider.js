import React, { useReducer } from 'react'

const RECEIVE_DATA = 'RECEIVE_DATA'
const SET_ERRORS = 'SET_ERRORS'
const SET_LOADING = 'SET_LOADING'

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data,
  }
}

export function setErrors(errors) {
  return {
    type: SET_ERRORS,
    errors,
  }
}

const CacheContext = React.createContext()

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

const CacheProvider = ({
  children,
  initialState = {
    data: {},
    errors: null,
    loading: true,
  },
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CacheContext.Provider value={[state, dispatch]}>
      {children}
    </CacheContext.Provider>
  )
}

export const useCache = () => {
  const context = React.useContext(CacheContext)
  if (!context || !context.length) {
    throw new Error(
      'No CacheContext found, please make sure that you are using the CacheProvider in the component tree'
    )
  }

  return context
}

export default CacheProvider
