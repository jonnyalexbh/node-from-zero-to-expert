const express = require('express')
const app = express()

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {
    name: 'jonnyalexbh',
    year: new Date().getFullYear()
  });
})

app.get('/about', function (req, res) {
  res.render('about', {
    year: new Date().getFullYear()
  });
})

app.listen(3000, () => {
  console.log('listening to requests in the port 3000');
})
