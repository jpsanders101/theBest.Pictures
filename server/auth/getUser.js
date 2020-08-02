const User = require('../models/User');

const getUser = async query => {
  console.log('[getUser]');
  let user;
  try {
    user = await User.findOne(query);
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports = getUser;
