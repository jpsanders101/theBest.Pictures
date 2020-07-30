import get from 'lodash.get';

export const getAuthenticated = state => get(state.user.authenticated);

const initialState = get(window._initialState.user, {});

const userReducer = (state = initialState) => {
  return { ...state };
};

export default userReducer;
