const { DEVELOPMENT, PRODUCTION } = require('../../tools/envConstants');
const devRoutes = require('./devRoutes');
const prodRoutes = require('./prodRoutes');

module.exports = {
  [DEVELOPMENT]: devRoutes,
  [PRODUCTION]: prodRoutes
};
