const express = require('express');
const createUser = require('../auth/createUser');
const loginUser = require('../auth/loginUser');
const handleError = require('../handleError');

const router = express.Router();

router.post('/user', async (req, res) => {
  const { email, password } = req.body;
  try {
    await createUser(email, password);
    const token = await loginUser(email, password);
    res.cookie('auth', token);
    res.sendStatus(201);
  } catch (err) {
    handleError(res, err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.cookie('auth', token);
    res.sendStatus(200);
  } catch (err) {
    handleError(res, err);
  }
});

module.exports = router;
