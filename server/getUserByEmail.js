const User = require('./models/User');

const getUserByEmail = async email => {
  console.log('[getUserByEmail]');
  let user;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports = getUserByEmail;
