import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import opn from 'opn';

/* eslint-disable no-console */

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
    // TO-DO - only do this in dev mode, or open Heroku if you've just deployed there
    // opn(`http://localhost:${port}`);
  }
});
