var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(request, response, next) {
  // response.render('gwall', {post: post, rant: post.rant}); // render tells it to look for view engine setup in app.js, which tells it to look for the hbs doc in views directory for that file name

  knex.table('posts').select().then(function (posts) {
    console.log(posts);
    response.render('gwall', {posts: posts});
  })

});

router.get('/post', function(request, response) {
  response.render('post');

});

router.post('/post', function(request, response) {
  // grab information
  var username = request.body.username;
  var image = request.body.image;
  var rant = request.body.rant;
  // insert into database table
  knex.table('posts').insert({
    username: username,
    image: image,
    rant: rant
  }).then(function(){
    // log to make sure this works
    console.log('YAY!');
    response.redirect('/gwall');
  }).catch(function(error){
    // catch error & if error direct to next middleware in app.js to send error page
    next(error);
  })

});

module.exports = router;
