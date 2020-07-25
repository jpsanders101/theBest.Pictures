const express = require('express');
const router = express.Router();
const createUser = require('./createUser');
const loginUser = require('./loginUser');
const { EMAIL_TAKEN } = require('./errorMessages');
const mongoose = require('mongoose');

router.post('/user', async (req, res) => {
  const { email, password } = req.body;
  try {
    await createUser(email, password);
    const token = await loginUser(email, password);
    res.status(201).json(token);
  } catch (err) {
    if (err.message === EMAIL_TAKEN) {
      res.status(400).send(EMAIL_TAKEN);
    }
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).send(err.message);
    }
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
