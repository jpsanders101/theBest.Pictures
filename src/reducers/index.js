import ajaxCalls from './ajaxCallReducer';
import { combineReducers } from 'redux';
import movies from './movielistReducer';
import app from './appReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  ajaxCalls,
  movies,
  app,
  user
});

export default rootReducer;
