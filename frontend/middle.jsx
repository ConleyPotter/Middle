import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import * as ArticleAPIUtil from './util/article_api_util'
import * as ArticleActions from './actions/articles/article_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Testing
  const store = configureStore()

  window.getState = store.getState
  window.store = store.dispatch

  // Articles Testing
  window.fetchArticles = ArticleAPIUtil.fetchArticles
  window.fetchArticle = ArticleAPIUtil.fetchArticle
  window.fetchArticle = ArticleActions.fetchArticle
  window.fetchArticles = ArticleActions.fetchArticles

  // React
  ReactDOM.render(<Root store={store} />, root);
})