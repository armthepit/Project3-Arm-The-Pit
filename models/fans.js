var mongoose = require("mongoose");

var fansSchema = new mongoose.Schema({
	name: {
		type: String, 
	},
	hometown: {
		type: String, 
	},	
	state: {
		type: String, 
	},
	country: {
		type: String, 
	},		
	picture: {
		type: String, 
	},
	artists: {
		type: Array, 
	},
	createdAt: {
		type: Date, 
		default: Date.now
	}		
});

var Fans = mongoose.model("Fans", fansSchema);

module.exports = Fans;