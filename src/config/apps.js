const isProduction = process.env.NODE_ENV === 'production'

export const UPMENTORING_API_URL = isProduction
  ? 'https://api.upmentoring.com/api/graphql'
  : 'http://api.upmentoring.local:8080/api/graphql'

export const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY

export const SENTRY_DSN = process.env.SENTRY_DSN
