const getUser = require('./getUser');
const { EMAIL_TAKEN } = require('./errorMessages');
const User = require('./models/User');
const hashPassword = require('./hashPassword');

const createUser = async (email, password) => {
  console.log('[createUser]');
  const existingUser = await getUser({ email });
  if (existingUser) {
    throw new Error(EMAIL_TAKEN);
  }
  const hashedPassword = await hashPassword(password);
  const newUser = new User({ email, password: hashedPassword });
  return newUser.save();
};

module.exports = createUser;
