var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstabSchema   = new Schema({
	songID: Integer,
	lat: Double,
});

module.exports = mongoose.model('Estab', EstabSchema);