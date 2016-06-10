var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res, next){
    console.log('In comes a ' + req.method + ' to ' + req.url );
    next();
});

app.use(function(req, res, next){
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next();
    } else {
        res.statusCode = 403;
        res.end('Not authorized');
    }
});

app.use(function(req, res){
    res.end('Secret info: the password is "swordish"');
});

http.createServer(app).listen(1234);