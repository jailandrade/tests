var express = require('express');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

// app.use(function(req, res, next){
//     var filePath = path.join(__dirname, 'static', req.url);
//     fs.stat(filePath, function(err, fileInfo){
//         if (err){
//             next();
//             return;
//         }
//         if (fileInfo.isFile()) {
//             res.sendFile(filePath);
//         } else {
//             next();
//         }
//     });
// });

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath))

app.use(function(req, res){
    res.status(404);
    res.send('File not found!');
});

app.listen(1234, function(){
    console.log('App started on port 1234');
});