import ajaxCalls from './ajaxCallReducer';
import { combineReducers } from 'redux';
import movies from './movielistReducer';
import app from './appReducer';

const rootReducer = combineReducers({
  ajaxCalls,
  movies,
  app
});

export default rootReducer;
