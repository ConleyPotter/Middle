import {
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
  RECEIVE_ERRORS
} from "../actions/modal/session_actions";

const _nullSession = {
  current_user: {
    id: null
  }
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { 
        current_user: {
          id: action.current_user.id,
          username: action.current_user.username
        }
      });
    case REMOVE_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
