var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('you just send a GET request, friend');
});

app.post('/', function(req, res){
	res.send('a POST request? nice');
});

app.put('/', function(req, res){
	res.send("I don't see a lot of PUT requests anymores");
});

app.delete('/', function(req, res){
	res.send('Oh my, a DELETE?');
});

app.listen(3000, function(){
	console.log('app is listening in port 3000');
});
