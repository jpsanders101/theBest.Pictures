import { SET_ERROR_STATE, REMOVE_ERROR_STATE, DISMISS_LANDING_PAGE } from './constants';

export const setErrorState = () => ({
  type: SET_ERROR_STATE
});

export const removeErrorState = () => ({
  type: REMOVE_ERROR_STATE
});

export const dismissLandingPage = () => ({
  type: DISMISS_LANDING_PAGE
})