var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstabSchema   = new Schema({
	name: String,
	pin: Number,
	lat: Number,
	lon: Number,
	requests: [{songId: String, count: Number}]
});

module.exports = mongoose.model('Estab', EstabSchema);