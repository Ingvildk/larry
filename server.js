var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

/*
 * The idea behind this piece of code is to start _two_ servers.
 *
 * 1. (port 3000) This server proxies '/api' requests to the backend (in order to
 * bypass CORS limitations) and '/script' requests to the "hot reload" server below.
 *
 * 2. (port 8081) This is the hot module replacement development server that
 * serves the projects' react javascript code.
 *
 */

var app = express();

app.use('/api', proxy(url.parse('http://localhost:5000/api/')));
app.use('/scripts', proxy(url.parse('http://localhost:3000/scripts')));
app.use('/images', proxy(url.parse('http://localhost:3000/images')));
app.use('/css', proxy(url.parse('http://localhost:3000/css')));
app.use('/js', proxy(url.parse('http://localhost:3000/js')));
app.use('/fonts', proxy(url.parse('http://localhost:3000/fonts')));



app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: false,
    stats: {
        colors: true
    }
});


// Hot module replacment development server.
server.listen(3000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});


// Connect directly to the proxy server while developing.
app.listen(8081, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Starting proxy at localhost:8081');
});
