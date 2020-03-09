function memoize(fn) {
  const cache = new Map()
  return (...args) => {
    if (typeof Map === 'undefined') {
      return fn(...args)
    }

    const hit = args.reduce((acc, arg) => acc && acc.get(arg), cache)
    if (hit) {
      return hit
    } else {
      let result = fn(...args)
      const lastArgIndex = args.length - 1
      args.reduce((accCache, arg, i) => {
        const resultOrCache =
          i === lastArgIndex ? result : accCache ? accCache : new Map()
        accCache.set(arg, resultOrCache)
        return resultOrCache
      }, cache)

      return result
    }
  }
}

export default memoize
