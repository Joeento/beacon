//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var config	   = require('./config.js');
var mongoose   = require('mongoose');
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port

mongoose.connect(config.mongoURL);

//add a router
var router = express.Router(); 				// get an instance of the express Router

//Routes accessed through /api only
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

app.use('/api', router);

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
