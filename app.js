// app.js

var express = require('express'),
  db = require('./models/index.js'),
  sequelize = require('sequelize'),
  bodyParser = require('body-parser'),
  methodOvrride = require('method-override'),
  bcrypt = require('bcrypt'),
  app = express();

app.set('view engine', 'ejs');

app.use(methodOvrride());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public'));

// logging
app.use(function(req, res, next){
  console.log(req.method, req.url)
  next()
});

app.get('/', function (req,res) {
  res.redirect('/users');
});

app.get('/users', function (req,res) {
  db.post.findAll().success(function(posts){
    res.render('index', {posts: posts});
  })
});

app.get('/users/:id', function (req,res) {
  //
});

app.get('/posts/:id', function (req,res) {
  var id = req.params.id;
  //

});

app.get('/users/:id/posts/new', function(req, res){
  var id = req.params.id;
  //
});

app.post('/users/:id/posts', function(req, res){
  var id = req.params.id;
  //
});




app.listen(3000, function(){
  console.log("LISTENING ON PORT 3000")
})
