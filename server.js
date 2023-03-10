var express = require('express');
var app = express();
var router = express.Router();
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/index.html', function(req, res) {
  res.render('pages/index');
});

router.get('/*.html', (req, res) => {
  res.render('Birds home page');
});
// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
