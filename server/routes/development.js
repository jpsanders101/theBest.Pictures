const express = require('express');
const webpack = require('webpack');
const config = require('../buildTools/webpack.config.dev');

const router = express.Router();

const compiler = webpack(config);

router.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
router.use(require('webpack-hot-middleware')(compiler));

module.exports = router;
