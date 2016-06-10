var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

var public = path.resolve(__dirname, 'public');
app.use(express.static(public));

app.use(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Looks like you didnt find a static file');
});

http.createServer(app).listen(1234);