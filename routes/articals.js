var express = require('express');
var router = express.Router();

var articalModel = require('../models/artical.js');
var tools = require('../utils/tools.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add',function(req,res,next){
	var artical = {}
	artical.id = tools.guid();
	artical.title = req.query.title;
	artical.author = req.query.author;
	artical.content = req.query.content;
	articalModel.add(artical,function(){
		
	});
});
router.get('/find',function(req,res,next){
	
});
router.get('/del',function(req,res,next){
	
});
router.get('/update',function(req,res,next){
	
});

module.exports = router;
