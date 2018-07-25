const isProduction = process.env.NODE_ENV === 'production'

export const API_BASE_URL = isProduction
  ? 'https://api.upmentoring.com/api'
  : //'http://api.upmentoring.local/api'
    'https://api.upmentoring.com/api'

export const STRIPE_PUBLIC_KEY = isProduction
  ? 'pk_live_4tpyN84joSKpkLX4oadSn83s'
  : 'pk_live_4tpyN84joSKpkLX4oadSn83s'

export const SENTRY_DSN = isProduction ? '' : ''
