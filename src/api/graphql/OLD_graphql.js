// import React, { useEffect } from 'react'
// import { useCache, receiveData, setErrors } from './Provider'
// import { UPMENTORING_API_URL } from '../../config/apps'

// const hashCode = text =>
//   text.split('').reduce(function(a, b) {
//     a = (a << 5) - a + b.charCodeAt(0)
//     return a & a
//   }, 0)

// async function runQuery({ queryAndVars, query, variables }) {
//   const response = await fetch(UPMENTORING_API_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: queryAndVars || JSON.stringify({ query, variables }),
//   })

//   return response.json()
// }

// async function runAndCacheQuery({ queryAndVars, cacheKey, dispatch }) {
//   const { data, errors } = await runQuery({ queryAndVars })

//   if (data) {
//     dispatch(receiveData({ [cacheKey]: data })) // caches the data
//   }
//   if (errors) {
//     dispatch(setErrors(errors))
//   }
// }

// export function graphql(query, config = {}) {
//   return Component => props => {
//     const [state, dispatch] = useCache()
//     const { loading, errors, data } = state
//     const { options = {} } = config
//     const { variables } =
//       typeof options === 'function' ? options(props) || {} : options
//     const queryAndVars = JSON.stringify({ query, variables })
//     const cacheKey = hashCode(queryAndVars)
//     const queryData = data && data[cacheKey]

//     useEffect(() => {
//       if (!queryData) {
//         runAndCacheQuery({ queryAndVars, cacheKey, dispatch })
//       }
//     }, [queryAndVars, cacheKey, dispatch, queryData])

//     return (
//       <Component
//         {...props}
//         loading={loading}
//         errors={errors}
//         data={queryData}
//       />
//     )
//   }
// }

// export const client = {
//   query: runQuery,
// }
