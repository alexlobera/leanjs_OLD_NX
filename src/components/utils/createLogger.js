import raven from 'raven-js'
import { SENTRY_DSN } from '../../config/apps'

export const DEBUG = 'debug'
export const INFO = 'info'
export const WARNING = 'warning'
export const ERROR = 'error'
export const FATAL = 'fatal'

const createRavenLogger = () => {
    raven.config(SENTRY_DSN).install()

    return {
        debug: (message) => {
            raven.captureMessage(message, { level: DEBUG })
        },
        info: (message) => {
            raven.captureMessage(message, { level: INFO })
        },
        warn: (message) => {
            raven.captureMessage(message, { level: WARNING })
        },
        error: (message) => {
            raven.captureMessage(message, { level: ERROR })
        },
        fatal: (message) => {
            raven.captureMessage(message, { level: FATAL })
        }
    }
}

export default process.env.NODE_ENV === 'development'
    ? () => console
    : createRavenLogger
