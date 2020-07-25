const webpack = require('webpack');
const config = require('../buildTools/webpack.config.dev');

module.exports = app => {
  const compiler = webpack(config);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
};
