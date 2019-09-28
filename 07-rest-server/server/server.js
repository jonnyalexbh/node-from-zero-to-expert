require('./config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user', function (req, res) {
  res.json('get user')
})

app.post('/user', function (req, res) {
  let body = req.body;

  if (body.name === undefined) {
    res.status(400).json({
      ok: false,
      message: 'the name is necessary'
    });
  } else {
    res.json(body)
  }
})

app.put('/user/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  })
})

app.delete('/user', function (req, res) {
  res.json('delete user')
})

mongoose.connect('mongodb://localhost:27017/jabh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
  if (err) throw err;
  console.log('online database');
});

app.listen(process.env.PORT, () => {
  console.log('listening port: ', process.env.PORT);
})
