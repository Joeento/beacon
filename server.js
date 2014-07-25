//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var config	   = require('./config.js');
var mongoose   = require('mongoose');

app.use(bodyParser());

//add some schemas!
var Estab     = require('./models/estab');

var port = process.env.PORT || 8080;

mongoose.connect(config.mongoURL);

//add a router
var router = express.Router();


router.route('/estab')
	.put(function(req, res) {
		var estab = new Estab(); 
		estab.name = req.body.name;
		estab.pin = req.body.pin;
		estab.requests = [];

		estab.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ status: 'Success', pin: estab.pin });
		});
		
	}).get(function(req, res) {
		Estab.find(function(err, estab) {
			if (err)
				res.send(err);

			res.json(estab);
		});
	});

router.route('/estab/:pin')
	.get(function(req, res) {
		Estab.find({pin: req.params.pin}, function(err, estab) {
			if (err)
				res.send(err);
			res.json(estab);
		});
	});


app.use('/api', router);

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
