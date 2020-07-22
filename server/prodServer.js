const config = require('./buildTools/webpack.config.prod');
const webpack = require('webpack');
const express = require('express');
const path = require('path');

module.exports = app => {
  console.log('Building assets...');

  require('./buildTools/buildHtml');

  webpack(config).run((err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(err || stats);
    }
    console.log('Finished building assets. TheBest.Pictures is ready to view.');
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
};
