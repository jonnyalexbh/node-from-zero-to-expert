const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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
  res.json(body)
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

app.listen(3000, () => {
  console.log('listening port: ', 3000);
})
