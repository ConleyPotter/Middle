import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signup = SessionAPIUtil.signup
  window.login = SessionAPIUtil.login
  window.logout = SessionAPIUtil.logout
  ReactDOM.render(<h1>Welcome to Middle!</h1>, root);
})