import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Testing
  const store = configureStore()

  window.getState = store.getState
  window.store = store.dispatch

  // React
  ReactDOM.render(<Root store={store} />, root);
})