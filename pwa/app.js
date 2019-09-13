const express = require('express');
const path = require('path');
const app = express();

const publicDirectory = path.join(__dirname, 'public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs')

app.get('/', function (req, res, next) {
  res.render('main');
})

const server = app.listen(3000, function () {
  console.log(`listening http://localhost:${server.address().port}`);
});
