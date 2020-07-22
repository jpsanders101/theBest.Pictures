const express = require('express');
const envServer = require('./envServer');

/* eslint-disable no-console */

require('./buildTools/startMessage');

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV;
const app = express();

envServer[environment](app);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now listening on PORT ${port}`.bgGreen);
  }
});
