const functions = require('firebase-functions')
const { setupApi } = require('./setupApi')
const autopilotapikey = functions.config().autopilot.key

exports.api = functions.https.onRequest(setupApi({ autopilotapikey }))
