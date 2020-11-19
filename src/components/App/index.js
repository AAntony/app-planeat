import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from '../Navigation'
import WallPage from '../Wall'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import CartPage from '../Cart'
import StockPage from '../Stock'
import RecipePage from '../Recipe'
import PasswordForgetPage from '../PasswordForget'
import PlanningPage from '../Planning'
import AccountPage from '../Account'
import AdminPage from '../Admin'

import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.STOCK} component={StockPage} />
      <Route path={ROUTES.RECIPE} component={RecipePage} />
      <Route path={ROUTES.CART} component={CartPage} />
      <Route path={ROUTES.WALL} component={WallPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.PLANNING} component={PlanningPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
)

export default withAuthentication(App)
