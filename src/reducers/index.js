import ajaxCalls from './ajaxCallReducer';
import { combineReducers } from 'redux';
import movies from './movielistReducer';
import app from './appReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  ajaxCalls,
  movies,
  app,
  auth
});

export default rootReducer;
