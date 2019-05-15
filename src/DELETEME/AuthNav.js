import React, { useState, useEffect } from 'react'
import getFirebase from '../.firebase'
import SignIn from './SignIn'
// import SignOutButton from '../SignOut'

const Navigation = ({ children }) => {
  const [firebase, setFirebase] = useState(null)
  //RM: @alex the bellow code is copied from session/auth
  // const [authUser, setAuthUser] = useState(null)
  const [authUser, setAuthUser] = useState(localStorage.getItem('authUser'))
  let _initFirebase = false

  // const firebaseInit = () => {
  //   if (firebase && !_initFirebase) {
  //     _initFirebase = true

  //     const listener = firebase.onAuthUserListener(
  //       authUser => {
  //         localStorage.setItem('authUser', JSON.stringify(authUser))
  //         setAuthUser(authUser)
  //       },
  //       () => {
  //         localStorage.removeItem('authUser')
  //         setAuthUser(null)
  //       }
  //     )
  //     listener()
  //   }
  // }

  useEffect(() => {
    const app = import('firebase/app')
    const auth = import('firebase/auth')
    const database = import('firebase/database')
    if (!firebase) {
      Promise.all([app, auth, database]).then(values => {
        const firebaseApp = getFirebase(values[0])
        setFirebase(firebaseApp)
      })

      // setAuthUser(JSON.parse(localStorage.getItem('authUser')))
      console.log('adfasd', firebase)
      // firebaseInit()
    }
  }, [])
  if (!authUser) {
    const user = firebase && firebase.auth && firebase.auth.currentUser
    localStorage.setItem('authUser', JSON.stringify(user))
  }

  return authUser ? children : <NavigationNonAuth firebase={firebase} />
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
