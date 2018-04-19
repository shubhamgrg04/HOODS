var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.render('posts-new');
});

module.exports = router;