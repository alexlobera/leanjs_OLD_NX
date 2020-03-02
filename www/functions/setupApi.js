const fetch = require('node-fetch')
const express = require('express')
const { WebClient } = require('@slack/web-api')

const setupApi = ({ autopilotapikey, slackToken, middlewares = [] }) => {
  const api = express()
  const RESOURCES_SINGED_UP = 'boolean--Resources-SingedUp'
  middlewares.map(middleware => api.use(middleware))

  api.use(setOptions)
  api.post('/sendFeedback', sendFeedback)
  api.post('/unsubscribe', requireBodyEmail, unsubscribe)
  api.post('/sessionSubscribe', requireBodyEmail, sessionSubscribe)
  api.post('/subscribe', requireBodyEmail, subscribe)

  async function sendFeedback(request, response, next) {
    const feedback = request && request.body
    if (!feedback) {
      response.status(401).send('no feedback')
    }
    console.log('Feedback', feedback)

    const web = new WebClient(slackToken)
    const feedbackWebChannelId = 'CTX1B2UJC'

    // See: https://api.slack.com/methods/chat.postMessage
    const res = await web.chat.postMessage({
      channel: feedbackWebChannelId,
      text: JSON.stringify(feedback),
    })

    response.status(200).send('feedback submited')
  }

  function requireBodyEmail(request, response, next) {
    const email = request && request.body && request.body.email
    if (email) {
      return next()
    } else {
      response.status(401).send('no email')
    }
  }

  async function postToAutopilot(endpoint, jsonBody) {
    console.log('jsonBody', jsonBody)
    const res = await fetch(`https://api2.autopilothq.com/v1/${endpoint}`, {
      method: 'POST',
      headers: {
        autopilotapikey,
      },
      body: jsonBody ? JSON.stringify(jsonBody) : undefined,
    })
    const json = await res.json()
    console.log('response:', JSON.stringify(json))

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
      return next()
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
    const { name, email, subscriptions, resources, pathname } = data
    const custom = subscriptions.reduce((acc, subscription) => {
      acc[`boolean--${subscription}--Session`] = true
      return acc
    }, {})
    custom[RESOURCES_SINGED_UP] = resources
    await postToAutopilot(`/contact`, {
      contact: {
        FirstName: name,
        Email: email,
        LeadSource: pathname,
        _autopilot_list: 'contactlist_37B9CE06-F48D-4F7B-A119-4725B474EF2C',
        custom,
      },
    })
    response.status(200).send('it worked')
  }

  async function subscribe(request, response) {
    const data = request && request.body
    const { email, form, city, path, resources } = data
    await postToAutopilot(`/contact`, {
      contact: {
        Email: email,
        LeadSource: `${form} form in ${path}`,
        custom: {
          'string--From--City': city,
          [RESOURCES_SINGED_UP]: resources,
        },
      },
    })
    response.status(200).send('it worked')
  }

  return api
}

exports.setupApi = setupApi
