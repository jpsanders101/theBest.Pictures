import express from 'express';
import webpack from 'webpack';
import path from 'path';
import opn from 'opn';
require('./startMessage.js');

/* eslint-disable no-console */

const config = require('../webpack.config.dev').default;

const port = process.env.PORT || 3000;
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
    opn(`http://localhost:${port}`);
  }
});
