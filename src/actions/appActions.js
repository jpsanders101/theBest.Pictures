import { SET_ERROR_STATE, REMOVE_ERROR_STATE } from './constants';

export const setErrorState = () => ({
  type: SET_ERROR_STATE
});

export const removeErrorState = () => ({
  type: REMOVE_ERROR_STATE
});
