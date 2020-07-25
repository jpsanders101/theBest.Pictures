const getUserByEmail = require('./getUserByEmail');
const { EMAIL_TAKEN, VALIDATION_ERROR } = require('./errorMessages');
const User = require('./models/User');

const createUser = async (email, password) => {
  console.log('[createUser]');
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error(EMAIL_TAKEN);
  }
  const newUser = new User({ email, password });
  await newUser.save();
};

module.exports = createUser;
