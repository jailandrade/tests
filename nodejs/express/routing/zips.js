var express = require('express');
var path = require('path');
var zipdb = require('zippity-do-dah');
var ForecastIo = require('forecastio');

var app = express();

var weather = new ForecastIo('472a83e9e87864935db0d9e0e5c82791');

app.use(express.static(path.resolve(__dirname, 'public_zip')));

app.set('views', path.resolve(__dirname, 'views_zip'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('index');
});

app.get(/^\/(\d{5})$/, function(req, res, next){
	var zipcode = req.params[0];
	var location = zipdb.zipcode(zipcode);
	if (!location.zipcode){
		next();
		return;
	}

	var latitude = location.latitude;
	var longitude = location.longitude;

	weather.forecast(latitude, longitude, function(err, data){
		if (err){
			next();
			return;
		}

		res.json({
			zipcode: zipcode,
			temperature: data.currently.temperature
		});
	});
});

app.use(function(req, res){
	res.status(404).render('404');
});

app.listen(3009);
