const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {
    name: 'jonnyalexbh'
  });
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.listen(3000, () => {
  console.log('listening to requests in the port 3000');
})
