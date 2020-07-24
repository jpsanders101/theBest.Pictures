const config = require('../buildTools/webpack.config.prod');
const webpack = require('webpack');
const express = require('express');

module.exports = app => {
  console.log('Building assets...');

  require('../buildTools/buildHtml');

  webpack(config).run((err, stats) => {
    if (err) {
      console.log(err);
    }
    if (stats.hasErrors()) {
      const info = stats.toJson();
      console.log(info.errors);
    }
    console.log('Finished building assets. TheBest.Pictures is ready to view.');
  });

  app.get(['*.js', '*.css'], (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });

  app.use(express.static('dist'));
};
