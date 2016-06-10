var express = require('express');
var path = require('path');
var http = require('http');
var app = Express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(3000);