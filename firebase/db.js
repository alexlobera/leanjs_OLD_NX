import { db } from './firebase'

// Save message from contact form  in realtime db

export const doCreateMessage = (name, email, message) =>
  db.ref(`contactSubmissions/${name}`).set({
    email,
    message,
  })
