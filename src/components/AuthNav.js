import React from 'react'
import { Link } from 'gatsby'

import { AuthUserContext } from './session/withAuthentication'
// import SignOutButton from '../SignOut'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
)

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to="/">Landing</Link>
    </li>
    {/* <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )} */}
    <li>{/* <SignOutButton /> */}</li>
  </ul>
)

const NavigationNonAuth = () => (
  <p>not signed in</p>
  //   <ul>
  //     <li>
  //       <Link to={ROUTES.LANDING}>Landing</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //     </li>
  //   </ul>
)

export default Navigation
