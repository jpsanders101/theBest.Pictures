import express from 'express';
import webpack from 'webpack';
import path from 'path';
import opn from 'opn';
require('./startMessage.js');
import { DEVELOPMENT, PRODUCTION } from './envConstants';

/* eslint-disable no-console */

let config;
let nodeEnvVar = process.env.NODE_ENV;
let portVar = process.env.PORT;

if (nodeEnvVar === DEVELOPMENT) {
  config = require('../webpack.config.dev').default;
} else if (nodeEnvVar === PRODUCTION) {
  config = require('../webpack.config.prod').default;
}

const port = nodeEnvVar === DEVELOPMENT ? 3000 : portVar || 3000;
const app = express();
const compiler = webpack(config);

if (nodeEnvVar === DEVELOPMENT) {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
}
if (nodeEnvVar === PRODUCTION) {
  app.use(express.static('dist'));
}

const indexPath = () => {
  if (nodeEnvVar === PRODUCTION) {
    return '../dist/index.html';
  }
  if (nodeEnvVar === DEVELOPMENT) {
    return '../src/index.html';
  }
  throw new Error("There's no index path available. Check the node env var.");
};

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, indexPath()));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    if (nodeEnvVar === DEVELOPMENT) {
      opn(`http://localhost:${port}`);
    }
  }
});
