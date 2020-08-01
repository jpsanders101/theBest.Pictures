import {
  BEGIN_LOGIN,
  SET_LOGIN_ERROR,
  END_LOGIN,
  SET_AUTHENTICATED
} from './constants';
import loginRequest from '../requests/login';

export const beginLogin = () => ({
  type: BEGIN_LOGIN
});
export const endLogin = () => ({
  type: END_LOGIN
});

export const setLoginError = err => ({
  type: SET_LOGIN_ERROR,
  value: err
});
export const setAuthenticated = authResponse => ({
  type: SET_AUTHENTICATED,
  value: authResponse
});

export const dispatchLogin = emailAndPassword => async dispatch => {
  dispatch(beginLogin());
  let loginResponse;
  try {
    loginResponse = await loginRequest(emailAndPassword);
  } catch (err) {
    return dispatch(setLoginError(err));
  }
  dispatch(setAuthenticated(loginResponse));
  dispatch(endLogin());
};
