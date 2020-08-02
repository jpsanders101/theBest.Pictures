const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  console.log('[auth middleware]');
  const { auth } = req.cookies;
  if (!auth) {
    res.initialState.user = {
      ...(res.initialState.user && res.initialState.user),
      authenticated: false,
    };
    return next();
  }
  let jwtResponse;
  try {
    jwtResponse = await jwt.verify(auth, process.env.TOKEN_SECRET);
  } catch (err) {
    console.log(err);
  }
  if (!jwtResponse) {
    res.initialState.user = {
      ...(res.initialState.user && res.initialState.user),
      authenticated: false,
    };
    return next();
  }
  const { _id } = jwtResponse;
  res._id = _id;
  res.initialState.user = {
    ...(res.initialState.user && res.initialState.user),
    authenticated: true,
  };
  next();
};

module.exports = auth;
