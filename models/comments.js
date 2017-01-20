var mongoose = require("mongoose");

var commentsSchema = new mongoose.Schema({
	artist: {
		type: String, 
	},
	fan: {
		type: String, 
	},	
	comment: {
		type: String, 
	},
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;