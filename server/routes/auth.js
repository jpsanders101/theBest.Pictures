const express = require('express');
const mongoose = require('mongoose');
const createUser = require('../auth/createUser');
const loginUser = require('../auth/loginUser');
const handleError = require('../handleError');

const router = express.Router();

router.post('/user', async (req, res) => {
  const { email, password } = req.body;
  try {
    await createUser(email, password);
    const token = await loginUser(email, password);
    res.status(201).json(token);
  } catch (err) {
    handleError(res, err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.json(token);
  } catch (err) {
    handleError(res, err);
  }
});

module.exports = router;
