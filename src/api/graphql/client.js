import React, { useEffect } from 'react'
import {
  useClient,
  useStatelessClient,
  receiveData,
  setErrors,
} from './Provider'
import { UPMENTORING_API_URL } from '../../config/apps'

const hashCode = text =>
  text.split('').reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)

function getCacheVars(query, variables) {
  const queryAndVars = JSON.stringify({ query, variables })
  const cacheKey = hashCode(queryAndVars)

  return { cacheKey, queryAndVars }
}

// function memoize(fn) {
//   let cache = {}
//   return (...args) => {
//     const key = args.join(',')
//     if (key in cache) {
//       return cache[key]
//     } else {
//       let result = fn(...args)
//       cache[key] = result
//       return result
//     }
//   }
// }

// const memoizedGetCacheVars = memoize(getCacheVars)

// TODO REPLACE THIS WITH useQuery
export function graphql(query, config = {}) {
  return Component => props => {
    // const [stateData, dispatchQuery] = useDispatch(useSelect(useClient(), { query, variables })), ACTION )
    const [state, dispatch] = useClient()
    const { loading, errors, data } = state
    const { options = {} } = config
    const { variables } =
      typeof options === 'function' ? options(props) || {} : options
    const { cacheKey } = getCacheVars(query, variables)
    const queryData = data && data[cacheKey]

    useEffect(() => {
      if (!queryData) {
        dispatch({ type: 'GRAPHQL_QUERY', query, variables })
      }
    }, [query, variables, dispatch, queryData])

    return (
      <Component
        {...props}
        loading={loading}
        errors={errors}
        data={queryData}
      />
    )
  }
}

async function postQuery(body) {
  const response = await fetch(UPMENTORING_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })

  return response.json()
}

export const withStatelessClient = Component => props => (
  <Component {...props} statelessClient={useStatelessClient()} />
)

const client = ([state, dispatch] = [], { post = postQuery } = {}) => async ({
  query,
  variables,
} = {}) => {
  const { cacheKey, queryAndVars } = getCacheVars(query, variables)

  if (!state) {
    return post(queryAndVars)
  }

  const queryData = state.data && state.data[cacheKey]
  if (queryData) {
    return { data: queryData }
  }
  const { data, errors } = await post(queryAndVars)

  if (data && cacheKey) {
    dispatch && dispatch(receiveData({ [cacheKey]: data })) // caches the data
  }
  if (errors) {
    dispatch && dispatch(setErrors(errors))
  }

  return { data, errors }
}

export default client
