import { 
  RECEIVE_ARTICLE, 
  RECEIVE_ARTICLES 
} from '../actions/articles/article_actions';

const articlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTICLE:
      return Object.assign({}, state, {[action.article.id]: action.article})
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, action.articles);
    default:
      return state;
  }
};

export default articlesReducer;
