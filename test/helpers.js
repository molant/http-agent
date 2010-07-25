/*
 * index.js: Tests helpers for http-agent tests
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

var http = require('http'),
    path = require('path');

require.paths.unshift(path.join(__dirname, '..', '..', 'lib'));

var httpAgent = require('http-agent');

var helpers = exports;

helpers.createAgent = function (options) {
  options = options || {};
  var host = options.host || 'graph.facebook.com';
  var urls = options.urls || ['barackobama', 'facebook', 'google'];
  var events = options.events || [];

  return httpAgent.create(host, urls);
};

helpers.createServer = function (options) {
  options = options || {};
  var port = options.port || 8080;
  
  http.createServer(function (req, res) {
    res.sendHeader(200, {'Content-Type': 'text/plain'});
    eyes.inspect(req);
    res.end();
  }).listen(port);
};