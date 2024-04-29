//setup express to handle routing and rendering
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

//setup bodyparser to extra data from form posts
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

// route to index page
app.get('/', function(req, res) {
    res.render('page/index');
});

// route to about page
app.get('/about', function(req, res) {
	res.render('page/about');
});

// route to api call for checking a phone number
app.post('/api/check_phone_number', (req, res) => {
	var number = req.body.number
	if (!isNaN(number) && number > 999999 && number < 10000000) {
		res.render('page/success'); //render the success page
	} else { 
		res.render('page/fail'); //render the fail page
	}
});

//start the web app
app.listen(8080, function () {
	console.log('App listening on port 8080!');
});

