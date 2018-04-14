import ajaxCalls from './ajaxCallReducer';
import {combineReducers} from 'redux';
import movies from './movielistReducer';

const rootReducer = combineReducers({
  ajaxCalls,
  movies
});

export default rootReducer;
