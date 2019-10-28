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

function getCacheBody(query, variables) {
  const body = JSON.stringify({ query, variables })
  const cacheKey = hashCode(body)

  return { cacheKey, body }
}

function memoize(fn) {
  let cache = {}
  return (...args) => {
    const hit = args.reduce((acc, arg) => acc && acc[arg], cache)
    if (hit) {
      return hit
    } else {
      let result = fn(...args)
      const lastArgIndex = args.length - 1
      args.reduce((prev, arg, i) => {
        prev[arg] = i === lastArgIndex ? result : {}
        return prev[arg]
      }, cache)

      return result
    }
  }
}
const memoizedGetCacheVars = memoize(getCacheBody)

// TODO REPLACE THIS WITH useQuery
export function graphql(query, config = {}) {
  return Component => props => {
    // TODO explore the following
    // const [stateData, dispatchQuery] = useDispatch(useSelect(useClient(), { query, variables })), ACTION )
    if (config.skip && config.skip(props)) {
      return <Component {...props} />
    }

    const [state, dispatch] = useClient()
    const { loading, errors, data } = state
    const { options = {} } = config
    const { variables } =
      typeof options === 'function' ? options(props) || {} : options
    const { cacheKey } = memoizedGetCacheVars(query, variables)
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

async function postQuery({ body }) {
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

export const createClient = ({ post = postQuery } = {}) => ([
  state,
  dispatch,
] = []) => async ({ query, variables } = {}) => {
  const { cacheKey, body } = memoizedGetCacheVars(query, variables)
  const json = { query, variables }

  if (!state) {
    return await post({ body, json })
  }
  const queryData = state.data && state.data[cacheKey]
  if (queryData) {
    return { data: queryData }
  }

  const { data, errors } = await post({ body, json })

  if (data && cacheKey) {
    dispatch && dispatch(receiveData({ [cacheKey]: data })) // caches the data
  }
  if (errors) {
    dispatch && dispatch(setErrors(errors))
  }

  return Promise.resolve({ data, errors })
}
