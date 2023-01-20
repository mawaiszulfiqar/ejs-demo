var express = require('express');
var app = express();
const router = express.Router()
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/index.html', async(req, res) => {
  console.log("in home index");
  res.render('pages/index.ejs');
});


// about page
app.get('/about', function(req, res) {
  res.render('pages/about.ejs');

router.get('/about', (req, res) => {
  res.send('About birds')
})
 
app.listen(8080);
console.log('Server is listening on port 8080');
