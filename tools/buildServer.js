const express = require('express');
const webpack = require('webpack');
const path = require('path');
const colors = require('colors');
const { PRODUCTION } = require('./envConstants.js');

/* eslint-disable no-console */

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv !== PRODUCTION) {
    throw Error('buildServer.js should only be used in "production" mode');
}

console.log(
    'Starting'.green,
    'TheBest.Pictures'.green.bold,
    'in'.green,
    nodeEnv,
    'mode...'.green
);

const config = require('./webpack.config.prod');

const port = process.env.PORT || 3000;
const app = express();

console.log('Building assets...');

require('./buildHtml');

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

//TODO: should only start listening after assets have finished being built
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Now listening on PORT ${port}`.bgGreen);
    }
});
