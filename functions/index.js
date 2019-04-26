const functions = require('firebase-functions')
const fetch = require('node-fetch')

exports.unsubscribe = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')

  if (request.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    response.set('Access-Control-Allow-Methods', 'POST')
    response.set('Access-Control-Allow-Headers', 'Content-Type')
    response.set('Access-Control-Max-Age', '3600')
    response.status(204).send('')
  } else {
    // Set CORS headers for the main request
    response.set('Access-Control-Allow-Origin', '*')

    const AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID = '0008'
    const email = request && request.body && request.body.email
    const AUTOPILOT_API_KEY = functions.config().autopilot.key
    if (email) {
      fetch(
        `https://api2.autopilothq.com/v1/trigger/${AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID}/contact/${email}`,
        {
          method: 'POST',
          headers: {
            autopilotapikey: AUTOPILOT_API_KEY,
          },
        }
      )
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(console.log('not working'))

      response.status(200).send('it worked')
    } else {
      response.status(401).send('no email')
    }
  }
})

exports.sessionSubscribe = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')

  if (request.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    response.set('Access-Control-Allow-Methods', 'POST')
    response.set('Access-Control-Allow-Headers', 'Content-Type')
    response.set('Access-Control-Max-Age', '3600')
    response.status(204).send('')
  } else {
    // Set CORS headers for the main request
    response.set('Access-Control-Allow-Origin', '*')

    const AUTOPILOT_SESSION_SUBSCRIBE_KEY = '0011'
    const data = request && request.body
    const {
      name,
      email,
      fundamentals,
      styling,
      hooks,
      perf,
      gqlclient,
      testing,
    } = data
    const AUTOPILOT_API_KEY = functions.config().autopilot.key
    if (email) {
      fetch(
        `https://api2.autopilothq.com/v1/trigger/${AUTOPILOT_SESSION_SUBSCRIBE_KEY}/contact/`,
        {
          method: 'POST',
          headers: {
            autopilotapikey: AUTOPILOT_API_KEY,
          },
          body: JSON.stringify({
            contact: {
              FirstName: name,
              Email: email,
              custom: {
                'fundamentals-session': fundamentals,
                'styling-session': styling,
                'hooks-session': hooks,
                'perf-session': perf,
                'gqlclient-session': gqlclient,
                'testing-session': testing,
              },
            },
          }),
        }
      )
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(console.log('not working'))

      response.status(200).send('it worked')
    } else {
      response.status(401).send('no email')
    }
  }
})
