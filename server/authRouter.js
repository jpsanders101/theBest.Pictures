const express = require('express');
const router = express.Router();
const createUser = require('./createUser');
const { EMAIL_TAKEN } = require('./errorMessages');
const mongoose = require('mongoose');

router.post('/user', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) {
    res.sendStatus(400);
  }
  try {
    await createUser(email, password);
  } catch (err) {
    if (err.message === EMAIL_TAKEN) {
      res.status(400).send(EMAIL_TAKEN);
    }
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).send(err.message);
    }

    res.sendStatus(500);
  }
  res.statusStatus(201);
});

module.exports = router;
