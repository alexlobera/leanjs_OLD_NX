const isProduction = process.env.NODE_ENV === 'production'

export const UPMENTORING_API_URL = isProduction
  ? 'https://api.upmentoring.com/api/graphql'
  : //'http://api.upmentoring.local/api/graphql'
    'https://api.upmentoring.com/api/graphql'

export const STRIPE_PUBLIC_KEY = isProduction
  ? 'pk_live_4tpyN84joSKpkLX4oadSn83s'
  : 'pk_live_4tpyN84joSKpkLX4oadSn83s'

export const SENTRY_DSN = isProduction ? '' : ''
