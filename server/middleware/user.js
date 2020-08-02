const getUser = require('../auth/getUser');

const user = async (req, res, next) => {
  console.log('[user middleware]');
  const { _id } = res;
  if (!_id) {
    return next();
  }
  const { email } = await getUser({ _id });

  res.initialState.user = {
    ...(res.initialState.user && res.initialState.user),
    email,
  };
  next();
};

module.exports = user;
