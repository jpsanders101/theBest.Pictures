import express from 'express';
import webpack from 'webpack';
import path from 'path';
require('./startMessage.js');

/* eslint-disable no-console */

const config = require('../webpack.config.prod').default;

const port = process.env.PORT || 3000;
const app = express();

console.log('Building assets...');

webpack(config).run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err || stats);
  }
  console.log('Finished building assets');
});

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
});
