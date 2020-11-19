import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from '../SignOut'
import { AuthUserContext } from '../Session'
import * as ROUTES from '../../constants/routes'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.WALL}>Wall</Link>
    </li>
    <li>
      <Link to={ROUTES.STOCK}>Stock</Link>
    </li>
    <li>
      <Link to={ROUTES.CART}>Cart</Link>
    </li>
    <li>
      <Link to={ROUTES.RECIPE}>Recipe</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
)

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
)

export default Navigation
