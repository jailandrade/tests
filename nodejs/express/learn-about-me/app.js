var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var setUpPassport = require('./setuppassport');

var routes = require('./routes/routes');
var app = express();

mongoose.connect('mongodb://localhost:27017/learn_about_me');
setUpPassport();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('port', process.env.PORT || 3456);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
	// allows each session to be encrypted from the clients
	secret: 'ajsALadAlAS!"9$PI$(!?(/SJLA18adsfadfaGASJQ871Ajshs2hs8!398ALSNBEMlasdfasdf12389214%',
	// is option required by the middleware
	resave: true,
	// this reset sessions that are uninitialized
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(app.get('port'), function(){
	console.log("Server started on port " + app.get('port'));
});
