const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getUser = require('./getUser');
const { INCORRECT_PASSWORD } = require('../errorMessages');

const loginUser = async (email, password) => {
  const { _id, password: hashedPassword } = await getUser({ email });
  const passwordCorrect = await bcrypt.compare(password, hashedPassword);
  if (!passwordCorrect) {
    throw new Error(INCORRECT_PASSWORD);
  }
  const token = await jwt.sign({ _id }, process.env.TOKEN_SECRET, {
    expiresIn: '10800s',
  });
  return token;
};

module.exports = loginUser;
