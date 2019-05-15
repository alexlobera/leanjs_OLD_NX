import React, { useState, useEffect } from 'react'
import getFirebase from './Firebase'
import SignIn from './SignIn'

const Navigation = ({ children }) => {
  const [firebase, setFirebase] = useState(null)
  const [authUser, setAuthUser] = useState(localStorage.getItem('authUser'))
  useEffect(() => {
    if (!firebase) {
      const app = import('firebase/app')
      const auth = import('firebase/auth')
      const database = import('firebase/database')
      Promise.all([app, auth, database]).then(values => {
        const firebaseApp = getFirebase(values[0])
        setFirebase(firebaseApp)
      })
    }
    const listener = () => {
      if (firebase) {
        firebase.onAuthUserListener(
          authUser => {
            localStorage.setItem('authUser', JSON.stringify(authUser))
            setAuthUser(authUser)
          },
          () => {
            localStorage.removeItem('authUser')
            setAuthUser(null)
          }
        )
      }
    }
    listener()
  }, [firebase])

  return authUser ? children : <NavigationNonAuth firebase={firebase} />
}

const NavigationNonAuth = ({ firebase }) => {
  return (
    <>
      <p>not signed in</p>
      <SignIn firebase={firebase} />
    </>
  )
}
export default Navigation
