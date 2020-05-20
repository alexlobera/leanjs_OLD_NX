import "whatwg-fetch"

const apiBaseUrl =
  "https://us-central1-reactgraphqlacademy.cloudfunctions.net/api/"

const defaultOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
}

export function sendMessage(message) {
  return fetch(`${apiBaseUrl}contactLeanJS`, {
    ...defaultOptions,
    body: JSON.stringify(message),
  })
}
