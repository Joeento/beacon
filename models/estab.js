var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstabSchema   = new Schema({
	name: String,
	pin: Integer,
	lat: Double,
	lon: Double
});

module.exports = mongoose.model('Estab', EstabSchema);