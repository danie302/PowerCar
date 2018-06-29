let mongoose = require('mongoose');

// Comment Schema

let commentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

let Comment = module.exports = mongoose.model('Comment', commentsSchema);

module.exports.createComment = function(comment, callback){

  Comment.create(comment, callback);

};

module.exports.findAllComments = function(postId, callback, limit){

  Comment.find({postId: postId}, callback).limit(limit);

};
