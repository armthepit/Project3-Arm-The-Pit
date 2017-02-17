const mongoose = require("mongoose");

let bygenreSchema = new mongoose.Schema({
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

let byGenre = mongoose.model("byGenre", bygenreSchema);

module.exports = byGenre;