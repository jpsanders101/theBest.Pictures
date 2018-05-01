import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
