// NPM Modules

var express = require('express');
var path = require('path');
var request = require('request');
var router = express.Router();
var mongoose = require('mongoose');
var Promise = require("bluebird");

// Assign Mongoose promise
mongoose.Promise = Promise;

// Mongodb models
var Artists = require("../models/artists");
var Fans = require("../models/fans");
var Comments = require("../models/comments");

// Default route renders the index handlebars view
router.get('/', function(req, res){
	res.render('index');
});


// Get all current articles in database
router.get('/articles', function(req, res){
	Articles.find().sort({ createdAt: -1 }).exec(function(err, data) { 
		if(err) throw err;
		res.json(data);
	});
});

// Get all comments for one article
router.get('/comments/:id', function(req, res){
	Comments.find({'articleId': req.params.id}).exec(function(err, data) {
		if(err) {
			console.log(err);
		} else {
			res.json(data);
		}	
	});
});

// Add comment for article
router.post('/addcomment/:id', function(req, res){
	console.log(req.params.id+' '+req.body.comment);
	Comments.create({
		articleId: req.params.id,
		name: req.body.name,
		comment: req.body.comment
	}, function(err, docs){    
		if(err){
			console.log(err);			
		} else {
			console.log("New Comment Added");
		}
	});
});

// Delete comment for article
router.get('/deletecomment/:id', function(req, res){
	console.log(req.params.id)
	Comments.remove({'_id': req.params.id}).exec(function(err, data){
		if(err){
			console.log(err);
		} else {
			console.log("Comment deleted");
		}
	})
});

module.exports = router;