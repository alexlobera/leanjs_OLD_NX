const fetch = require("node-fetch");
const express = require("express");
const { WebClient } = require("@slack/web-api");

const slackBotIconUrl =
  "https://avatars.slack-edge.com/2017-05-14/183274846643_04a16c14f97d4f0554a6_44.png";

const setupApi = ({ autopilotapikey, slackToken, middlewares = [] }) => {
  const api = express();
  const RESOURCES_SINGED_UP = "boolean--Resources-SingedUp";
  middlewares.map((middleware) => api.use(middleware));

  api.use(setOptions);
  api.post("/sendFeedback", sendFeedback);
  api.post("/requestQuote", requestQuote);
  api.post("/unsubscribe", requireBodyEmail, unsubscribe);
  api.post("/sessionSubscribe", requireBodyEmail, sessionSubscribe);
  api.post("/subscribe", requireBodyEmail, subscribe);
  api.get("/status", status);

  async function sendFeedback(request, response, next) {
    const feedback = request && request.body;
    //eg. mention user by id <@U5E4C0UAJ>
    const mention = feedback.mention;
    delete feedback.mention;

    if (!feedback) {
      response.status(401).send("no feedback");
    }

    const web = new WebClient(slackToken);
    // See: https://api.slack.com/methods/chat.postMessage
    const res = await web.chat.postMessage({
      channel: "CTX1B2UJC",
      icon_url: slackBotIconUrl,
      text: `${mention ? mention : ""} \`\`\`
          ${JSON.stringify(feedback, null, " ")}
          \`\`\`
          `,
    });

    response.status(200).send("feedback submited");
  }

  async function requestQuote(request, response) {
    const fields = request && request.body;
    if (!fields) {
      response.status(401).send("no message");
    }

    const web = new WebClient(slackToken);

    // See: https://api.slack.com/methods/chat.postMessage
    const res = await web.chat.postMessage({
      channel: "C8MTKU3NC",
      icon_url: slackBotIconUrl,
      text: `:fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire:
NEW PRIVATE TRAINING TRIAL REQUEST ${Object.keys(fields).map(
        (key) => `\n\n*${key}*: ${fields[key]}`
      )}
            `,
    });

    response.status(200).send("request submited");
  }

  function requireBodyEmail(request, response, next) {
    const email = request && request.body && request.body.email;
    if (email) {
      return next();
    } else {
      response.status(401).send("no email");
    }
  }

  async function postToAutopilot(endpoint, jsonBody) {
    console.log("jsonBody", jsonBody);
    const res = await fetch(`https://api2.autopilothq.com/v1/${endpoint}`, {
      method: "POST",
      headers: {
        autopilotapikey,
      },
      body: jsonBody ? JSON.stringify(jsonBody) : undefined,
    });
    const json = await res.json();
    console.log("response:", JSON.stringify(json));

    return json;
  }

  function setOptions(request, response, next) {
    response.set("Access-Control-Allow-Origin", "*");

    if (request.method === "OPTIONS") {
      response.set("Access-Control-Allow-Methods", "POST");
      response.set("Access-Control-Allow-Headers", "Content-Type");
      response.set("Access-Control-Max-Age", "3600");
      response.status(204).send("");
    } else {
      return next();
    }
  }

  async function unsubscribe(request, response) {
    const AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID = "0008";
    const email = request && request.body && request.body.email;
    await postToAutopilot(
      `/trigger/${AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID}/contact/${email}`
    );
    response.status(200).send("it worked");
  }

  async function sessionSubscribe(request, response) {
    const data = request && request.body;
    const { name, email, subscriptions, resources, pathname } = data;
    const custom = subscriptions.reduce((acc, subscription) => {
      acc[`boolean--${subscription}--Session`] = true;
      return acc;
    }, {});
    custom[RESOURCES_SINGED_UP] = resources;
    await postToAutopilot(`/contact`, {
      contact: {
        FirstName: name,
        Email: email,
        LeadSource: pathname,
        _autopilot_list: "contactlist_37B9CE06-F48D-4F7B-A119-4725B474EF2C",
        custom,
      },
    });
    response.status(200).send("it worked");
  }

  async function subscribe(request, response) {
    const data = request && request.body;
    const { email, form, city, path, resources, utm_source } = data;
    await postToAutopilot(`/contact`, {
      contact: {
        Email: email,
        LeadSource: `${form} form in ${path}`,
        custom: {
          "string--From--City": city,
          "string--UTM--Source": utm_source,
          [RESOURCES_SINGED_UP]: resources,
        },
      },
    });
    response.status(200).send("it worked");
  }

  async function status(request, response) {
    response.status(200).send("it works");
  }

  return api;
};

exports.setupApi = setupApi;
