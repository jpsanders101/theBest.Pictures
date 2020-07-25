const express = require('express');
const mongoose = require('mongoose');
const createUser = require('../auth/createUser');
const loginUser = require('../auth/loginUser');
const handle400 = require('../handle400');

const router = express.Router();

router.post('/user', async (req, res) => {
  const { email, password } = req.body;
  try {
    await createUser(email, password);
    const token = await loginUser(email, password);
    res.status(201).json(token);
  } catch (err) {
    handle400(res, err);
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).send(err.message);
    }
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.json(token);
  } catch (err) {
    handle400(res, err);
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
