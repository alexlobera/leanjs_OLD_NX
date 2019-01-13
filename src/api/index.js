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
  )

export const triggerSubscribe = ({ email, pathname }) => {
  window &&
    window.Autopilot &&
    window.Autopilot.run('associate', {
      _simpleAssociate: true,
      Email: email,
      custom: {
        'string--From--Path': pathname,
      },
    })
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('event', 'conversion', {
    send_to: 'AW-877316317/d5TtCOmF_IoBEN2Rq6ID',
  })
}
