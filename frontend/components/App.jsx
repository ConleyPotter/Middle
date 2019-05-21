import React from "react";
import NavBarContainer from './header/nav_bar_container.js';
import LoginFormContainer from './auth/login_form_container.js';
import SignupFormContainer from './auth/signup_form_container.js';
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
