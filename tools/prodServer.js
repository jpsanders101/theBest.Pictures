import express from 'express';
import webpack from 'webpack';
import path from 'path';
import colors from 'colors';
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

app.get(['*.js', '*.css'], (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now listening on PORT ${port}`.bgGreen)
  }
});
