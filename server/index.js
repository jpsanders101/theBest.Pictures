require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const envRoutes = require('./envRoutes');
const path = require('path');
const { PRODUCTION } = require('../tools/envConstants');
const authRouter = require('./authRouter');

/* eslint-disable no-console */

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

envRoutes[environment](app);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now listening on PORT ${port}`.bgGreen);
  }
});
app.use(express.json());
app.use('/auth', authRouter);

app.get('*', function(req, res) {
  res.sendFile(
    path.join(
      __dirname,
      `../${environment === PRODUCTION ? 'dist' : 'src'}/index.html`
    )
  );
});
