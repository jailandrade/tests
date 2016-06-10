var url = require('url');
var parsedURL = url.parse("http://www.example.com/profile?name=jail");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);