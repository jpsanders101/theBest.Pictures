import * as types from '../actions/constants';
import cookie from 'cookie';

const initialState = {
  errorState: false,
  showLandingPage: !cookie.parse(document.cookie).seen_landing
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ERROR_STATE:
      return { ...state, errorState: true };
    case types.REMOVE_ERROR_STATE:
      return { ...state, errorState: false };
    case types.DISMISS_LANDING_PAGE:
      return { ...state, showLandingPage: false }
    default:
      return state;
  }
};
