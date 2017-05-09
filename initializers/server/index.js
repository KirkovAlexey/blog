const path = require('pack');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals');
require('babel-core/register');
require.extenstions['.css'] = () => {
  return;
};

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3000;

const express = require('express');
const application = express();

application.use(express.static('src/static'));
application.set('views', __dirname);
application.set('view engine', 'ejs');

application.get('*', require('./render').default);

application.listen(3002, function() {
  console.log('Server listening on 3002');
});
