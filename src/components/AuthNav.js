import React from 'react'
import { Link } from 'gatsby'

import SignIn from './SignIn'
import { AuthUserContext } from './session/withAuthentication'
// import SignOutButton from '../SignOut'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => {
      console.log('authUser', authUser)
      return authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }}
  </AuthUserContext.Consumer>
)

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <p>signed in</p>
      <Link to="/">Landing</Link>
    </li>
  </ul>
)

const NavigationNonAuth = () => (
  <>
    <p>not signed in</p>
    <SignIn />
  </>
)

export default Navigation
