
// Initiate App.
const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors())

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Default.
app.use(express.static(__dirname + '/public'));

// End Initiate.

// Import Models.
let Post = require('./models/post.js');
let Comment = require('./models/comment.js');

// Mongo Setup.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/powercar');
let db = mongoose.connection;

// Check connection.
db.once('open', function(){
  console.log('Conectado a MongoDB');
});

// Check for errors in connection.
db.on('error', function(err){
  console.log(err);
});

// API ----------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------


// Create Post.
app.post('/api/posts/create', function(req, res){

  let data = req.body;
  Post.create(data, function(err, user) {
    answer = "Success";
    res.send(answer);
  });

});

// Get All Posts.
app.get('/api/posts', function(req, res){
  Post.findAllPosts(function(err, posts){
    if (err) {
      throw err;
    }
    let data = {
      posts: posts,
    }
    res.send(data);
  });
});

// Create Comment.
app.post('/api/comments/create', function(req, res){

  let data = req.body;
  console.log(data);
  Comment.create(data, function(err, user) {
    answer = "Success";
    res.send(answer);
  });

});

// Get Comments by Post.
app.post('/api/comments', function(req, res){

  let data = req.body;

  Comment.findAllComments(data.id, function(err, comments){
    if (err) {
      throw err;
    }
    let data = {
      comments: comments,
    }
    res.send(data);
  });
});

// End API ---------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------





//----------------------------------------------
// React Routes
//----------------------------------------------
// Here react-router routes are defined.
app.get('/', function (request, response){
    response.sendFile(__dirname + '/public/index.html')
});
//----------------------------------------------
// React Routes End
//----------------------------------------------



// Starts listening.
app.listen(3000, function() {
  console.log('Escuchando en el puerto 3000...');

});
