var express = require('express');
var logger = require('morgan');
var http = require('http');

var app = express();

app.use(logger('short'));

app.use(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
})

http.createServer(app).listen(1234);