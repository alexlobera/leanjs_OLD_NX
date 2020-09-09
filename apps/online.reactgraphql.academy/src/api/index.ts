import { getCookie } from '../utils';

// const umApiBaseUrl = 'https://api2.upmentoring.com/';
const umApiBaseUrl = 'http://localhost:3334/';
const apiBaseUrl = 'https://api.leanjs.com/';
// const apiBaseUrl = 'http://localhost:3335/';

const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = (token) =>
  fetch(`${umApiBaseUrl}auth`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const courseSubscribe = (message) =>
  fetch(`${apiBaseUrl}courseSubscribe`, {
    ...defaultOptions,
    body: JSON.stringify({
      ...message,
      utm_source: getCookie('utm_source'),
      slackChannel: 'C016TLFL695',
    }),
  });

export const triggerSubscribe = ({
  email,
  form = 'login',
  resources = true,
}) => {
  const utm_source = getCookie('utm_source');
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const payload = {
    email,
    form,
    resources,
    path,
    utm_source,
  };
  return fetch(`${apiBaseUrl}subscribe`, {
    ...defaultOptions,
    body: JSON.stringify(payload),
  });
};
