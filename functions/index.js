const functions = require('firebase-functions')
const fetch = require('node-fetch')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  resonse.set('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else {
    // Set CORS headers for the main request
    res.set('Access-Control-Allow-Origin', '*')
    res.send('Hello World!')

    const AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID = '5a1f31869009404289bc9d63a2b4cca5'
    const email = request.body.email
    fetch(
      `https://api2.autopilothq.com/v1/trigger/${AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID}/contact/${email}`,
      {
        method: 'POST',
        headers: {
          autopilotapikey: AUTOPILOT_API_KEY,
        },
      }
    )
  }
})
