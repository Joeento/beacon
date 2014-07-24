var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SongSchema   = new Schema({
	songID: Number,
	lat: Number,
});

module.exports = mongoose.model('Song', SongSchema);