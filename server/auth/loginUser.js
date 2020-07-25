const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getUser = require('./getUser');

const loginUser = async (email, password) => {
  const { _id, password: hashedPassword } = await getUser({ email });
  await bcrypt.compare(password, hashedPassword);
  console.log('[loginUser] Password correct');
  const token = await jwt.sign({ _id }, process.env.TOKEN_SECRET, {
    expiresIn: '10800s'
  });
  return token;
};

module.exports = loginUser;
