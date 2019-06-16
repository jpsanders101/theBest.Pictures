import * as types from '../actions/constants';
import cookie from 'cookie';

const initialState = {
  errorState: false,
  showLandingPage: !cookie.parse(document.cookie).seen_landing,
  filters: {
    seen: 'none'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ERROR_STATE:
      return { ...state, errorState: true };
    case types.REMOVE_ERROR_STATE:
      return { ...state, errorState: false };
    case types.DISMISS_LANDING_PAGE:
      return { ...state, showLandingPage: false };
    case types.APPLY_SEEN_FILTER:
      const filter =
        action.value === state.filters.seen ? 'none' : action.value;
      return { ...state, filters: { ...state.filters, seen: filter } };
    default:
      return state;
  }
};
