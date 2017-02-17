const mongoose = require("mongoose");

let bycountrySchema = new mongoose.Schema({
	title: {
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

let byCountry = mongoose.model("byCountry", bycountrySchema);

module.exports = byCountry;