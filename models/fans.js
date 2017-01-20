var mongoose = require("mongoose");

var fansSchema = new mongoose.Schema({
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

var Fans = mongoose.model("Fans", fansSchema);

module.exports = Fans;