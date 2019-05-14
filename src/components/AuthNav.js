import React from 'react'
import { Link } from 'gatsby'

import SignIn from './SignIn'
// import SignOutButton from '../SignOut'

const Navigation = ({ firebase }) => {
  console.log('firebaseNavigation', firebase)
  const user = firebase && firebase.auth && firebase.auth.currentUser

  return user ? <NavigationAuth /> : <NavigationNonAuth firebase={firebase} />
}

const NavigationAuth = () => (
  <ul>
    <li>
      <p>signed in</p>
      <Link to="/">Landing</Link>
    </li>
  </ul>
)

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
