import express from 'express';
import webpack from 'webpack';
import path from 'path';
import opn from 'opn';
require('./startMessage.js');
import { DEVELOPMENT, PRODUCTION } from './envConstants';

/* eslint-disable no-console */

let config;
let nodeEnv = process.env.NODE_ENV;

if (nodeEnv === DEVELOPMENT) {
  config = require('../webpack.config.dev').default;
} else if (nodeEnv === PRODUCTION) {
  config = require('../webpack.config.prod').default;
}

const port = nodeEnv === DEVELOPMENT ? 3000 : process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    if (nodeEnv === DEVELOPMENT) {
      opn(`http://localhost:${port}`);
    }
  }
});
