var http = require('http');
var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Creates a global array to store all your entries
var entries = [];
// Make this entries array available in all views
app.locals.entries = entries;

app.use(logger('dev'));

// Populate req.body if the user is submiting a form
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/new-entry', function(req, res){
    res.render('new-entry');
});

app.post('/new-entry', function(req, res){
    if (!req.body.title || !req.body.text){
        res.status(400).send('Entries must have a title and a body');
        return;
    }
    entries.push({
        title: req.body.title,
        content: req.body.text,
        published: new Date()
    });
    res.redirect('/');
});

app.use(function(req, res){
    res.status(404).render('404');
});

http.createServer(app).listen(1234, function(){
    console.log('Guestbook app started on port 1234');
});

