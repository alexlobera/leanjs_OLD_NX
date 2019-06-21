import trackUserBehaviour from '../components/utils/trackUserBehaviour'

export const triggerSessionSubscribe = ({
  name,
  email,
  subscriptions,
  resources,
  pathname = '1-day workshops form',
}) =>
  fetch(
    `https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/sessionSubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subscriptions,
        resources,
        pathname,
      }),
    }
  ).then(() => {
    trackUserBehaviour({
      event: '1-DAY_SESSION_SUBSCRIBE',
    })
  })

export const triggerUnsubscribe = ({ email }) =>
  fetch(
    `https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/unsubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }
  ).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_UNSUBSCRIBE',
    })
  })

export const triggerSubscribe = ({
  email,
  pathname = 'footer',
  city,
  resources = true,
}) =>
  fetch(
    `https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        pathname,
        city,
        resources,
      }),
    }
  ).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_SIGNUP',
    })
  })
