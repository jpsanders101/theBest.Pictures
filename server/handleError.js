const mongoose = require('mongoose');
const {
  EMAIL_TAKEN,
  INCORRECT_PASSWORD,
  MISSING_EMAIL_PASSWORD
} = require('./errorMessages');

const handleError = (res, error) => {
  if (is400(error)) {
    return res.status(400).send(error.message);
  }
  console.log(error);
  return res.sendStatus(500);
};

const is400 = error => {
  return (
    [EMAIL_TAKEN, INCORRECT_PASSWORD, MISSING_EMAIL_PASSWORD].includes(
      error.message
    ) || error instanceof mongoose.Error.ValidationError
  );
};

module.exports = handleError;
