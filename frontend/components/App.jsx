import React from "react";
import NavBarContainer from './header/nav_bar_container.js';
import LoginFormContainer from './auth/login_form_container.js';
import SignupFormContainer from './auth/signup_form_container.js';
import MainPageContainer from '../components/main/main_page_container'
import MembershipPage from './auth/signup/membership_page_container'
import Modal from './auth/modal/modal_container'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Switch>
      <AuthRoute path="/membership" component={ MembershipPage } />
      <Route exact path="/" component={ MainPageContainer } />
    </Switch>
  </div>
);

export default App;

      // <ProtectedRoute
      //   exact
      //   path="/users/:userId"
      //   component={ProfilePage}
      // />;