/* eslint-disable no-console */
require('dotenv').config();
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const handlebars = require('handlebars');
const { PRODUCTION } = require('../tools/envConstants');
const authRouter = require('./routes/auth');
const auth = require('./middleware/auth');
const user = require('./middleware/user');

require('./buildTools/startMessage');

mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error:'));
db.once('open', function() {
  console.log('Successfully connected to MongoDb');
});

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV;
const app = express();
app.use(require(`./routes/${environment}`));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now listening on PORT ${port}`.bgGreen);
  }
});
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRouter);

const source = fs
  .readFileSync(path.resolve(__dirname, './index.hbs'))
  .toString();

const template = handlebars.compile(source);

app.use((_, res, next) => {
  res.initialState = {};
  return next();
});

app.get('*', auth, user, function(_, res) {
  const html = template({
    production: environment === PRODUCTION,
    initialState: JSON.stringify(res.initialState)
  });
  res.send(html);
});
