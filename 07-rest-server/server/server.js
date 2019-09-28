require('./config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./routes/user'));

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
