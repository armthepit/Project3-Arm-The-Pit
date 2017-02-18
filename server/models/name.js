const mongoose = require("mongoose");

let bynameSchema = new mongoose.Schema({
	title: {
		type: String, 
		unique : true
	},
	nameUrl: {
		type: String, 
		unique : true
	},	
	numberArtists: {
		type: Number, 
	},	
	createdAt: {
		type: Date, 
		default: Date.now
	}		
});

let byName = mongoose.model("byName", bynameSchema);

module.exports = byName;