export const triggerUnsubscribe = email => {
  fetch(
    `https://us-central1-reactjsacademy-react.cloudfunctions.net/unsubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  )
}
