var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RequestSchema   = new Schema({
	songId: String,
	estabId: Number,
	requests: Number
});

module.exports = mongoose.model('Request', RequestSchema);