import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import articlesReducer from './articles_reducer';
import clapsReducer from './claps_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  articles: articlesReducer,
  claps: clapsReducer
});

export default entitiesReducer;
