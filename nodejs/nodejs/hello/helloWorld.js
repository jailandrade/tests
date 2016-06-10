var http = require('http');

function requestHandler(req, res) {
    console.log('In comes a request to: ' + req.url);

    if (req.url === '/') {
        res.end('Welcome to the homepage');
    } else if (req.url === '/about') {
        res.end('Welcome to the about page!');
    } else {
        res.end('Error! Page not found');
    }
}

var server = http.createServer(requestHandler);

server.listen(1234);