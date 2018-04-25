import {
    PostData as PostDataController
} from './../controllers';


var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/nodekb');
// var Schema = mongoose.Schema;

// var PostSchema = new Schema({
//   title:    { type: String, required: true },
//   url:      { type: String, required: true },
//   summary:  { type: String, required: true }
// });

// var PostData = mongoose.model('PostData', PostSchema);


router.get('/', function(req, res){
	res.render('posts-new');
});

router.post('/', function(req, res){
	// console.log(req.body);
	PostDataController.addNewPost(req.body)
	.then(function(data){
		res.send({
			body: data
		});
		data.save();
		// res.redirect('/');

	// 	res.redirect('/');
	// 	// data.save();

	})
	// .catch(function(err){
	// 	res.send(err);
	// })
	// var post = new PostData(req.body);
	
});


module.exports = router;