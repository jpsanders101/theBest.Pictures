const jwt = require('jsonwebtoken');
const getUser = require('./auth/getUser');

const auth = async (req, res, next) => {
  console.log('[auth]');
  const { auth } = req.cookies;
  if (!auth) {
    return next();
  }
  let jwtResponse;
  try {
    jwtResponse = await jwt.verify(auth, process.env.TOKEN_SECRET);
  } catch (err) {
    console.log(err);
  }
  if (!jwtResponse) {
    return next();
  }
  const user = await getUser({ _id: jwtResponse._id });
  next();
};

module.exports = auth;
