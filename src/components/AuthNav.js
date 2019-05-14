import React, { useState, useEffect } from 'react'
import getFirebase from './Firebase'
import SignIn from './SignIn'
// import SignOutButton from '../SignOut'

const Navigation = ({ children }) => {
  const [firebase, setFirebase] = useState(null)
  useEffect(() => {
    const app = import('firebase/app')
    const auth = import('firebase/auth')
    const database = import('firebase/database')

    Promise.all([app, auth, database]).then(values => {
      const firebaseApp = getFirebase(values[0])
      setFirebase(firebaseApp)
    })
  }, [])
  const user = firebase && firebase.auth && firebase.auth.currentUser

  return user ? <>{children}</> : <NavigationNonAuth firebase={firebase} />
}

const NavigationNonAuth = ({ firebase }) => {
  console.log('navNonAuthfirebase', firebase)
  return (
    <>
      <p>not signed in</p>
      <SignIn firebase={firebase} />
    </>
  )
}
export default Navigation
