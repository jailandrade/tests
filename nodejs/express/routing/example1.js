var express = require('express');
var app = express();

app.get('/olivia', function(req, res){
    res.send('Welcome to Olivia page');
});

app.get('/users/:user', function(req, res){
    res.status(200).send('The user is: ' + req.params.user);
});

// only the routes with number
app.get(/^\/users\/(\d+)$/, function(req, res){
    console.log('the id is numeric');
    res.status(200).send('The id is: ' + req.params[0]);
});

app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res){
    var startId = parseInt(req.params[0], 10);
    var endId = parseInt(req.params[0], 10);
});

app.use(function(req, res){
    res.status(404).send('Page not found');
});

app.listen(3000);