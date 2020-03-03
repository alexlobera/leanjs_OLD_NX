const functions = require("firebase-functions");
const { setupApi } = require("./src/api");
const autopilotapikey = functions.config().autopilot.key;
const slackToken = functions.config().slack.token;

exports.api = functions.https.onRequest(
  setupApi({ autopilotapikey, slackToken })
);
