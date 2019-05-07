import trackUserBehaviour from '../components/utils/trackUserBehaviour'

export const triggerSessionSubscribe = ({
  name,
  email,
  fundamentals,
  styling,
  hooks,
  perf,
  gqlclient,
  testing,
  resources,
}) =>
  fetch(
    `https://us-central1-reactjsacademy-react.cloudfunctions.net/sessionSubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        fundamentals,
        styling,
        hooks,
        perf,
        gqlclient,
        testing,
        resources,
      }),
    }
  ).then(() => {
    trackUserBehaviour({
      event: '1-DAY_SESSION_SUBSCRIBE',
    })
  })

export const triggerUnsubscribe = ({ email }) =>
  fetch(
    `https://us-central1-reactjsacademy-react.cloudfunctions.net/unsubscribe`,
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

export const triggerSubscribe = ({ email, pathname = 'footer' }) =>
  fetch(
    `https://us-central1-reactjsacademy-react.cloudfunctions.net/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        pathname,
      }),
    }
  ).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_SIGNUP',
    })
  })
