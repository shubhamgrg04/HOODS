var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodekb');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:    { type: String, required: true },
  url:      { type: String, required: true },
  summary:  { type: String, required: true }
});

var PostData = mongoose.model('PostData', PostSchema);


router.get('/', function(req, res){
	res.render('posts-new');
});

router.post('/', function(req, res){
	var post = new PostData(req.body);
	post.save();
	res.redirect('/');
});


module.exports = router;