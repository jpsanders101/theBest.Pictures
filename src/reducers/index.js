import ajaxCalls from './ajaxCallReducer';
import { combineReducers } from 'redux';
import reviews from './reviewsReducer';
import app from './appReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  ajaxCalls,
  reviews,
  app,
  auth
});

export default rootReducer;
