//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var config	   = require('./config.js');
var mongoose   = require('mongoose');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

//add some schemas!
var Estab     = require('./models/estab');

var port = process.env.PORT || 8080;

mongoose.connect(config.mongoURL);

//add a router
var router = express.Router();


router.route('/estabs')
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
			res.json(estab[0]);
		});
	});

router.route('/estab/:pin/request')
	.post(function(req, res) {
		Estab.find({pin: req.params.pin}, function(err, estab) {
			if (err)
				res.send(err);

			Estab.update({pin: estab[0].pin}, {$push: { requests: {songId: req.body.song_id, count: 1}}},
				function(err2, val){
					if (err2)
						res.send(err2);
			});
			res.json(estab);
		});
	});



app.use('/api', router);

app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
