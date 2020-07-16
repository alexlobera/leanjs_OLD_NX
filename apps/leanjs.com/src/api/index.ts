import axios from 'axios';

const apiBaseUrl =
  // 'https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/';
  'http://localhost:3335/';

// const defaultOptions = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// export const sendMessage = (message) =>
//   fetch(`${apiBaseUrl}contactLeanJS`, {
//     ...defaultOptions,
//     body: JSON.stringify(message),
//   });

export const sendMessage = async (message) => {
  await axios({
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'text',
    method: 'POST',
    url: `${apiBaseUrl}contactLeanJS`,
    data: message,
  });
};

export const rsvpWebinar = async (message) => {
  await axios({
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'text',
    method: 'POST',
    url: `${apiBaseUrl}rsvpEvent`,
    data: {
      ...message,
      slackChannel: 'C016TLFL695',
    },
  });
};
