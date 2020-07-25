const webpack = require('webpack');
const express = require('express');
const config = require('../buildTools/webpack.config.prod');

const router = express.Router();

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

router.get(['*.js', '*.css'], (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

router.use(express.static('dist'));

module.exports = router;
