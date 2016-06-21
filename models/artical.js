var mongo = require('../utils/mongoose.js');
var async = require('async');
var tools = require('../utils/tools.js');
var Artical = function(title, author, createTime, content) {
    this.title = title;
    this.author = author;
    this.createTime = createTime;
    this.content = content;
    var Schema = {
    	id:{
    		type:String,
    		required:true
    	},
    	title:String,
    	author:String,
    	content:String
    }
    var schema = mongo.getSchema(Schema);
    this.Model = mongo.getModel('myblog_artical', schema, 'myblog_artical');

}
Artical.prototype.add = function(artical,cb) {
    var entity = new this.Model(artical);
    articalEntity.save(function(err) {
        //这里把错误码返回
        cb.call(this, err);
    });
}
Artical.prototype.find = function(condition, cb) {
    var query = this.Model.find(condition);
    var promise = query.exec();
    promise.addBack(function(err, docs) {
        cb.call(this, { err: err,docs: docs });
    });

}
Artical.prototype.findById = function(id, cb) {
    this.Model.findById(id).lean().exec(function(err, docs) {
        cb.call(this, { err: err, docs: docs });
    });
}
Artical.prototype.del = function(id, cb) {
    this.findById(id, function(result) {
        if (result.docs != null && result.docs.length > 0) {
            var query = this.Model.remove({ id: id });
            query.exec(function(err) {
                cb.call(this, { err: err });
            });
        }
    });
}
Artical.prototype.update = function(condition,cb){
	var query = this.Model.update(condition);
	query.exec(function(err){
		cb.call(this,{err:err});
	});
}


module.exports = new Artical();
