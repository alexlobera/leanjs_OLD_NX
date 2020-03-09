import React, { useEffect, useMemo } from 'react'
import { useClient, useQuery } from './Provider'
import { UPMENTORING_API_URL } from '../../config/apps'

const hashCode = text =>
  text.split('').reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)

function getHashBody(query, variables) {
  // console.log('cacheKey: running getHashBody ')
  const body = JSON.stringify({ query, variables })
  const cacheKey = hashCode(body)

  return { cacheKey, body }
}

export function memoize(fn) {
  const cache = new Map()
  console.log('cacheKey new:', cache)
  return (...args) => {
    // const hit = args.reduce((acc, arg) => !acc && acc[arg], cache)
    const hit = args.reduce((accCache, arg) => {
      // return accCache && accCache.get(arg)
      console.log('cacheKey: searching', arg, accCache)
      if (!accCache) {
        return
      }
      console.log('cacheKey: found', accCache.get(arg))
      return accCache.get(arg)
    }, cache)
    if (hit) {
      console.log('cacheKey: hit', hit)
      return hit
    } else {
      let result = fn(...args)
      const lastArgIndex = args.length - 1
      args.reduce((prev, arg, i) => {
        const value = i === lastArgIndex ? result : prev ? prev : new Map()
        prev.set(arg, value)
        console.log('cacheKey: reduce', prev, arg, value)
        return value
      }, cache)

      return result
    }
  }
}
//const memoizedGetCacheVars = memoize(getHashBody)

const computeProps = (config, props) => {
  const { options = {} } = config
  return typeof options === 'function' ? options(props) || {} : options
}
const memoizedComputeProps = memoize(computeProps)

export function graphql(query, config = {}) {
  return Component => props => {
    if (config.skip && config.skip(props)) {
      return <Component {...props} />
    }
    // OPTION 1 BUG
    // const { options = {} } = config
    // const { variables } =
    //   typeof options === 'function' ? options(props) || {} : options

    // OPTION 2 VALUES CACHED DURING THE COMPONENT LIFETIME
    // const { variables } = useMemo(() => {
    //   console.log('variables options client')
    //   const { options = {} } = config
    //   return typeof options === 'function' ? options(props) || {} : options
    // }, [config.options, props])

    // OPTION 3 VALUES CACHED DURING ALL THE APP RUNTIME
    const { variables } = memoizedComputeProps(config, props)

    const { data, loading, errors } = useQuery(query, { variables })

    return (
      <Component {...props} loading={loading} errors={errors} data={data} />
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

export const withStatelessClient = Component => props => {
  const { client } = useClient()
  return <Component {...props} statelessClient={client} />
}

export const createClient = () => {
  return {
    query: async ({ query, variables } = {}) => {
      const { body } = getHashBody(query, variables) // memoizedGetCacheVars(query, variables)

      return await postQuery({ body })
    },
  }
}
