import React from 'react'
import { Link } from 'gatsby'

import SignIn from './SignIn'
// import SignOutButton from '../SignOut'

const Navigation = ({ firebase, children }) => {
  console.log('firebaseNavigation', firebase)
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
