const express = require('express');
const webpack = require('webpack');
const path = require('path');

/* eslint-disable no-console */

require('./startMessage');

const config = require('./webpack.config.prod');

const port = process.env.PORT || 3000;
const app = express();

console.log('Building assets...');

require('./buildHtml');

webpack(config).run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err || stats);
  }
  console.log('Finished building assets. TheBest.Pcitures is ready to view.');
});

app.get(['*.js', '*.css'], (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now listening on PORT ${port}`.bgGreen);
  }
});
