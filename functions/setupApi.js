const fetch = require('node-fetch')
const express = require('express')

const setupApi = ({ autopilotapikey, middlewares = [] }) => {
  const api = express()
  middlewares.map(middleware => api.use(middleware))

  api.use(setOptions)
  api.post('/unsubscribe', requireBodyEmail, unsubscribe)
  api.post('/sessionSubscribe', requireBodyEmail, sessionSubscribe)
  api.post('/subscribe', requireBodyEmail, subscribe)
  function requireBodyEmail(request, response, next) {
    console.log('2***********', JSON.stringify(request.body))
    const email = request && request.body && request.body.email
    if (email) {
      next()
    } else {
      response.status(401).send('no email')
    }
  }

  async function postToAutopilot(endpoint, jsonBody) {
    const res = await fetch(`https://api2.autopilothq.com/v1/${endpoint}`, {
      method: 'POST',
      headers: {
        autopilotapikey,
      },
      body: jsonBody ? JSON.stringify(jsonBody) : undefined,
    })
    const json = await res.json()
    console.log(JSON.stringify(json))

    return json
  }

  function setOptions(request, response, next) {
    response.set('Access-Control-Allow-Origin', '*')

    if (request.method === 'OPTIONS') {
      response.set('Access-Control-Allow-Methods', 'POST')
      response.set('Access-Control-Allow-Headers', 'Content-Type')
      response.set('Access-Control-Max-Age', '3600')
      response.status(204).send('')
    } else {
      next()
    }
  }

  async function unsubscribe(request, response) {
    const AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID = '0008'
    const email = request && request.body && request.body.email
    await postToAutopilot(
      `/trigger/${AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID}/contact/${email}`
    )
    response.status(200).send('it worked')
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
    await postToAutopilot(`/contact`, {
      contact: {
        FirstName: name,
        Email: email,
        LeadSource: '1-day workshops form',
        _autopilot_list: 'contactlist_37B9CE06-F48D-4F7B-A119-4725B474EF2C',
        /* 
        TODO: refactor the sessions into an array of strings e.g.:
        const {
          name,
          email,
          sessions  // ["Fundamentals", "Styling", etc]
        } = data
        */

        // TODO: custom = sessions.map(session => `boolean--${session}--Session`)
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
  }

  async function subscribe(request, response) {
    const email = request && request.body && request.body.email
    const pathname = request && request.body && request.body.pathname
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
  }

  return api
}

exports.setupApi = setupApi
