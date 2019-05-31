import React from "react";
import NavBar from './header/nav_bar_container.js';
import LoginFormContainer from './auth/login_form_container.js';
import SignupFormContainer from './auth/signup_form_container.js';
import MainPageContainer from '../components/main/main_page_container'
import ArticleShow from './main/articles/article_show_container'
import Modal from './auth/modal/modal_container'
import UserProfile from './users/user_show_container'
import ArticleEditor from './main/articles/article_editor_container'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBar />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Switch>
      <Route exact path="/" component={ MainPageContainer } />
      <ProtectedRoute exact path="/articles/new" component={ ArticleEditor } />
      <ProtectedRoute path="/articles/:articleId/edit" component={ ArticleEditor } />
      <Route exact path="/articles/:articleId" component={ ArticleShow } />
      <Route path="/users/:userId" component={ UserProfile } />
    </Switch>
  </div>
);

export default App;
