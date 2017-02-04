const mongoose = require("mongoose");

let bystateSchema = new mongoose.Schema({
	title: {
		type: String, 
		unique : true
	},
	artist: {
		type: Number, 
	},	
	createdAt: {
		type: Date, 
		default: Date.now
	}		
});

let byState = mongoose.model("byState", bystateSchema);

module.exports = byState;