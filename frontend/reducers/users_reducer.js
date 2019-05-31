import { RECEIVE_USERS } from '../actions/users/users_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, action.users);
    default:
      return state;
  }
};

