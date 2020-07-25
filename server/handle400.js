const { EMAIL_TAKEN, INCORRECT_PASSWORD } = require('./errorMessages');

const handle400 = (res, error) => {
  if ([EMAIL_TAKEN, INCORRECT_PASSWORD].includes(error.message)) {
    return res.status(400).send(error.message);
  }
  return;
};

module.exports = handle400;
