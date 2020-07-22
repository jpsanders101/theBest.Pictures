const { DEVELOPMENT, PRODUCTION } = require('../tools/envConstants.js');
const devServer = require('./devServer');
const prodServer = require('./prodServer');

module.exports = {
  [DEVELOPMENT]: devServer,
  [PRODUCTION]: prodServer
};
