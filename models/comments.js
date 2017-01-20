var mongoose = require("mongoose");

var commentsSchema = new mongoose.Schema({
	title: {
		type: String, 
	},
	imgLink: {
		type: String, 
	},	
	storyLink: {
		type: String, 
	},
	summary: {
		type: String, 
	},		
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;