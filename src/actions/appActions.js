import {
  SET_ERROR_STATE,
  REMOVE_ERROR_STATE,
  DISMISS_LANDING_PAGE,
  APPLY_SEEN_FILTER,
  TOGGLE_LOGIN_MODAL,
} from './constants';

export const setErrorState = () => ({
  type: SET_ERROR_STATE,
});

export const removeErrorState = () => ({
  type: REMOVE_ERROR_STATE,
});

export const dismissLandingPage = () => ({
  type: DISMISS_LANDING_PAGE,
});

export const applySeenFilter = (filter) => ({
  type: APPLY_SEEN_FILTER,
  value: filter,
});

export const toggleLoginModal = () => ({
  type: TOGGLE_LOGIN_MODAL,
});
