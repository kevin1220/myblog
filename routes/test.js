var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  function geta(b){
  	setTimeout(function(){
  		getb(function(a){
  			b.call(this,a+10);
  		});
  	},3000);
  }
  function getb(a){
  	setTimeout(function(){
  		a.call(this,2);
  	},2000);
  }
  function getc(){
  	return 15;
  }
  geta(function(b){
  	console.log(b)
  });
  console.log(getc());
});

module.exports = router;