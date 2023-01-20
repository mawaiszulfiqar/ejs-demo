var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/index.html', async(req, res) => {
  console.log("in home index");
  res.render('pages/index.ejs');
});

app.get('/', async (req, res) => {
  console.log("in / index");
    res.render('pages/index.ejs', {
    theEnvironment: 'theenv',
    });
    return;
});


// about page
app.get('/about', function(req, res) {
  res.render('pages/about.ejs');
  
 
app.listen(8080);
console.log('Server is listening on port 8080');
