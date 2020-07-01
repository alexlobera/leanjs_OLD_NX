import trackUserBehaviour from '../components/utils/trackUserBehaviour';
import { getCookie } from '../components/utils/store';

const apiBaseUrl =
  'https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/';

const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const triggerSessionSubscribe = ({
  name,
  email,
  subscriptions,
  resources = false,
  pathname = '1-day workshops form',
}) =>
  fetch(`${apiBaseUrl}sessionSubscribe`, {
    ...defaultOptions,
    body: JSON.stringify({
      name,
      email,
      subscriptions,
      resources,
      pathname,
      utm_source: getCookie('utm_source'),
    }),
  }).then(() => {
    trackUserBehaviour({
      event: '1-DAY_SESSION_SUBSCRIBE',
    });
  });

export const triggerUnsubscribe = ({ email }) =>
  fetch(`${apiBaseUrl}unsubscribe`, {
    ...defaultOptions,
    body: JSON.stringify({
      email,
    }),
  }).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_UNSUBSCRIBE',
    });
  });

export const triggerSubscribe = ({
  email,
  form = 'footer',
  city = 'unknown',
  resources = true,
}) => {
  const utm_source = getCookie('utm_source');

  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const payload = {
    email,
    form,
    city,
    resources,
    path,
    utm_source,
  };
  return fetch(`${apiBaseUrl}subscribe`, {
    ...defaultOptions,
    body: JSON.stringify(payload),
  }).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_SIGNUP',
      payload,
    });
  });
};

export const sendFeedback = (feedback) =>
  fetch(`${apiBaseUrl}sendFeedback`, {
    ...defaultOptions,
    body: JSON.stringify(feedback),
  });

export const requestQuote = (message) =>
  fetch(`${apiBaseUrl}requestQuote`, {
    ...defaultOptions,
    body: JSON.stringify(message),
  });
