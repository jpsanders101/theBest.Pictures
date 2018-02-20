export default (state = {}, action) => {
  switch (action.type) {
    case 'MARK_AS_SEEN':
      return Object.assign({}, state, action.movies);
    default:
      return state;
  }
};
