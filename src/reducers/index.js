import {combineReducers} from 'redux';
import movies from './movielistReducer';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
