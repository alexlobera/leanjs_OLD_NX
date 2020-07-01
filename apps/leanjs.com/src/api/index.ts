import axios from 'axios';

const apiBaseUrl =
  'https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/';

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
  const result = await axios({
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'text',
    method: 'POST',
    url: `${apiBaseUrl}contactLeanJS`,
    data: message,
  });
};
