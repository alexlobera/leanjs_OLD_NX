/* eslint-disable @typescript-eslint/camelcase */

import fetch from 'node-fetch';
import { WebClient } from '@slack/web-api';
import { Router } from 'express';

import * as config from './config';

const router = Router();

const slackBotIconUrl =
  'https://avatars.slack-edge.com/2017-05-14/183274846643_04a16c14f97d4f0554a6_44.png';

const RESOURCES_SINGED_UP = 'boolean--Resources-SingedUp';

async function postMessageToSlack({ message, title, channel }) {
  const web = new WebClient(config.slackToken);
  //  See: https://api.slack.com/methods/chat.postMessage
  await web.chat.postMessage({
    channel,
    icon_url: slackBotIconUrl,
    text: `${title} ${Object.keys(message).map(
      (key) => `\n\n*${key}*: ${message[key]}`
    )}
                  `,
  });
}

async function sendFeedback(request, response) {
  const feedback = request && request.body;
  //eg. mention user by id <@U5E4C0UAJ>
  const mention = feedback.mention;
  delete feedback.mention;

  if (!feedback) {
    response.status(401).send('no feedback');
  }

  const web = new WebClient(config.slackToken);
  // See: https://api.slack.com/methods/chat.postMessage
  await web.chat.postMessage({
    channel: 'CTX1B2UJC',
    icon_url: slackBotIconUrl,
    text: `${mention ? mention : ''} \`\`\`
          ${JSON.stringify(feedback, null, ' ')}
          \`\`\`
          `,
  });

  response.status(200).send('feedback submited');
}

async function requestQuote(request, response) {
  const fields = request && request.body;
  if (!fields) {
    response.status(401).send('no message');
  }

  const web = new WebClient(config.slackToken);

  // See: https://api.slack.com/methods/chat.postMessage
  await web.chat.postMessage({
    channel: 'C8MTKU3NC',
    icon_url: slackBotIconUrl,
    text: `:fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire: :fire:
NEW PRIVATE TRAINING TRIAL REQUEST ${Object.keys(fields).map(
      (key) => `\n\n*${key}*: ${fields[key]}`
    )}
            `,
  });

  response.status(200).send('request submited');
}

async function contactLeanJS(request, response) {
  await postMessageToSlack({
    message: request.body,
    title:
      ':tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: LeanJS lead',
    channel: 'C8MTKU3NC',
  });

  response.status(200).send('message sent');
}

function requireBodyEmail(request, response, next) {
  const email = request && request.body && request.body.email;
  if (email) {
    return next();
  } else {
    response.status(401).send('no email');
  }
}

async function postToAutopilot(endpoint, jsonBody = null) {
  const res = await fetch(`https://api2.autopilothq.com/v1/${endpoint}`, {
    method: 'POST',
    headers: {
      autopilotapikey: config.autopilotApikey,
    },
    body: jsonBody ? JSON.stringify(jsonBody) : undefined,
  });
  const json = await res.json();

  return json;
}

async function unsubscribe(request, response) {
  const AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID = '0008';
  const email = request && request.body && request.body.email;
  await postToAutopilot(
    `/trigger/${AUTOPILOT_UNSUBSCRIBE_TRIGGER_ID}/contact/${email}`
  );
  response.status(200).send('it worked');
}

async function sessionSubscribe(request, response) {
  const data = request && request.body;
  const { name, email, subscriptions, resources, utm_source } = data;
  const custom = subscriptions.reduce((acc, subscription) => {
    acc[`boolean--${subscription}--Session`] = true;
    return acc;
  }, {});
  custom[RESOURCES_SINGED_UP] = resources;
  await postToAutopilot(`/contact`, {
    contact: {
      FirstName: name,
      Email: email,
      LeadSource: utm_source,
      _autopilot_list: 'contactlist_37B9CE06-F48D-4F7B-A119-4725B474EF2C',
      custom,
    },
  });
  response.status(200).send('it worked');
}

async function subscribe(request, response) {
  const data = request && request.body;
  const { email, form, city, path, resources, utm_source } = data;
  await postToAutopilot(`/contact`, {
    contact: {
      Email: email,
      LeadSource: utm_source,
      custom: {
        'string--From--City': city,
        'string--Website--Source': `${form} form in ${path}`,
        [RESOURCES_SINGED_UP]: resources,
      },
    },
  });
  response.status(200).send('it worked');
}

async function status(request, response) {
  response.status(200).send('it works');
}

async function rsvpEvent(request, response) {
  const {
    autopilotListId,
    signUpNewletters,
    utm_source,
    slackChannel,
    ...restData
  } = request && request.body;

  const custom = Object.keys(restData).reduce((acc, key) => {
    acc[`${typeof restData[key]}--${key}`] = restData[key];
    return acc;
  }, {});

  // C0178CW15K4 meetups slack channel id
  // C016TLFL695 webinars slack channel id

  const autopilotData = {
    FirstName: restData.name,
    Email: restData.email,
    LeadSource: utm_source,
    company: restData.company,
    custom,
  };

  await Promise.all([
    postToAutopilot(`/contact`, {
      contact: {
        ...autopilotData,
        _autopilot_list: `contactlist_${autopilotListId}`,
      },
    }),
    postMessageToSlack({
      message: { ...restData, signUpNewletters },
      title:
        ':tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: LeanJS lead',
      channel: slackChannel,
    }),
  ]);

  if (signUpNewletters && signUpNewletters.length) {
    // we can't add a contact to 2 different list upon creation
    await postToAutopilot(`/contact`, {
      contact: {
        ...autopilotData,
        _autopilot_list: `contactlist_${signUpNewletters[0]}`,
      },
    });
  }

  response.status(200).send('it worked');
}

async function courseSubscribe(request, response) {
  const data = request && request.body;
  const { courseName, email, utm_source, autopilotListId, slackChannel } = data;

  await postToAutopilot(`/contact`, {
    contact: {
      Email: email,
      LeadSource: utm_source,
      _autopilot_list: `contactlist_${autopilotListId}`,
      custom: {
        'string--Course-Name': courseName,
      },
    },
  });

  console.log('aaa');

  await postMessageToSlack({
    message: { courseName, email, utm_source },
    title:
      ':grapes: :baby: :grapes: :baby: :grapes: :baby: :grapes: :baby: :grapes: :baby: ',
    channel: slackChannel,
  });

  response.status(200).send('it worked');
}

router.post('/contactLeanJS', contactLeanJS);
router.post('/sendFeedback', sendFeedback);
router.post('/requestQuote', requestQuote);
router.post('/unsubscribe', requireBodyEmail, unsubscribe);
router.post('/sessionSubscribe', requireBodyEmail, sessionSubscribe);
router.post('/subscribe', requireBodyEmail, subscribe);
router.post('/rsvpEvent', requireBodyEmail, rsvpEvent);
router.post('/courseSubscribe', requireBodyEmail, courseSubscribe);

router.get('/status', status);

export default router;
