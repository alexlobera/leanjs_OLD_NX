import axios from 'axios';

const apiBaseUrl = 'https://api.leanjs.com/';
//'http://localhost:3335/';

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
