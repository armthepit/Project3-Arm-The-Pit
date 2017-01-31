const mongoose = require("mongoose");

let fansSchema = new mongoose.Schema({
	email: {
		type: String, 
		unique : true
	},
	password_encrypt: {
		type: String, 
	},	
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

let Fans = mongoose.model("Fans", fansSchema);

module.exports = Fans;