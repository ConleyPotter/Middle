import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import * as ArticleAPIUtil from './util/article_api_util'
import * as ArticleActions from './actions/articles/article_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Current User
  let store;
  if (window.current_user) {
    const preloadedState = {
      entities: {
        users: { [window.current_user.id]: window.current_user }
      },
      session: { 
        current_user: {
          id: window.current_user.id,
          username: window.current_user.username
        }
      }
    };
    store = configureStore(preloadedState);
    delete window.current_user;
  } else {
    const preloadedState = {
      session: {
        current_user: {
          id: null,
        }
      }
    }
    store = configureStore(preloadedState);
  }
  // Testing
  window.getState = store.getState;
  window.store = store.dispatch;

  // Articles Testing
  window.postArticle = ArticleAPIUtil.postArticle
  window.postArticleAction = ArticleActions.postArticle

  // React
  ReactDOM.render(<Root store={store} />, root);
})