const express = require('express')
const app = express()

app.get('/', function (req, res) {
  let output = {
    name: 'jonnyalex.bh',
    phone: 2224567,
    enabled: true
  }
  res.send(output)
})

app.get('/data', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('listening to requests in the port 3000');
})
