import get from 'lodash.get';
import {
  BEGIN_LOGIN,
  SET_LOGIN_ERROR,
  END_LOGIN,
  SET_AUTHENTICATED
} from '../actions/constants';

export const getAuthenticated = state => get(state, 'auth.authenticated');
export const getEmail = state => get(state, 'auth.email');
const initialState = get(window, '_initialState.user', {});
console.log(initialState);

const authReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        email: value.email
      };
  }
  return { ...state };
};

export default authReducer;
