let mongoose = require('mongoose');

// Post Schema

let postsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});


let Post = module.exports = mongoose.model('Post', postsSchema);

module.exports.createPost = function(post, callback){

  Post.create(post, callback);

};

module.exports.findAllPosts = function(callback, limit){

  Post.find(callback).limit(limit);

};
