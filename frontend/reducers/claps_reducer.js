import {
    RECEIVE_CLAP,
    RECEIVE_CLAPS
} from '../actions/claps/clap_actions';

function mergeIntoArticleKey(clap, state) {
  if (state[clap.likeable_id]) {
    const ClapsForThisArticle = state[clap.likeable_id];
    ClapsForThisArticle[clap.id] = clap;
    const newState = Object.assign({}, state);
    delete newState[clap.likeable_id];
    return Object.assign({}, newState, ClapsForThisArticle);
  } else {
    return Object.assign({}, state, {[clap.likeable_id]: clap});
  }
}

const clapsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CLAP:
      return Object.assign({}, state, mergeIntoArticleKey(action.clap, state));
    case RECEIVE_CLAPS:
      return Object.assign({}, state, action.claps);
    default:
      return state;
  }
};

export default clapsReducer;
