const functions = require('firebase-functions')
const fetch = require('node-fetch')
const express = require('express')

const api = express()
const AUTOPILOT_API_KEY = functions.config().autopilot.key

api.use(optionsMiddleware)
api.post('/unsubscribe', unsubscribe)
api.post('/sessionSubscribe', sessionSubscribe)
api.post('/subscribe', subscribe)

exports.api = functions.https.onRequest(api)

async function postToAutopilot(endpoint, jsonBody) {
  const res = await fetch(`https://api2.autopilothq.com/v1/${endpoint}`, {
    method: 'POST',
    headers: {
      autopilotapikey: AUTOPILOT_API_KEY,
    },
    body: jsonBody ? JSON.stringify(jsonBody) : undefined,
  })
  await res.json()
  console.log(json)

  return json
}

function optionsMiddleware(request, response, next) {
  response.set('Access-Control-Allow-Origin', '*')

  if (request.method === 'OPTIONS') {
    response.set('Access-Control-Allow-Methods', 'POST')
    response.set('Access-Control-Allow-Headers', 'Content-Type')
    response.set('Access-Control-Max-Age', '3600')
    response.status(204).send('')
  } else {
    next(request, response)
  }
}

async function unsubscribe(request, response) {
  const AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID = '0008'
  const email = request && request.body && request.body.email
  if (email) {
    await postToAutopilot(
      `/trigger/${AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID}/contact/${email}`
    )
    response.status(200).send('it worked')
  } else {
    response.status(401).send('no email')
  }
}

async function sessionSubscribe(request, response) {
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
    resources,
    native,
  } = data
  if (email) {
    await postToAutopilot(`/contact`, {
      contact: {
        FirstName: name,
        Email: email,
        LeadSource: '1-day workshops form',
        _autopilot_list: 'contactlist_37B9CE06-F48D-4F7B-A119-4725B474EF2C',
        custom: {
          'boolean--Fundamentals--Session': fundamentals,
          'boolean--Styling--Session': styling,
          'boolean--Hooks--Session': hooks,
          'boolean--Perf--Session': perf,
          'boolean--GQLclient--Session': gqlclient,
          'boolean--Testing--Session': testing,
          'boolean--Resources--Signup': resources,
          'boolean--Native--Signup': native,
        },
      },
    })
    response.status(200).send('it worked')
  } else {
    response.status(401).send('no email')
  }
}

async function subscribe(request, response) {
  const email = request && request.body && request.body.email
  const pathname = request && request.body && request.body.pathname
  if (email) {
    await postToAutopilot(`/contact`, {
      contact: {
        Email: email,
        LeadSource: 'Footer contact form',
        custom: {
          'string--From--Path': pathname,
        },
      },
    })
    response.status(200).send('it worked')
  } else {
    response.status(401).send('no email')
  }
}
