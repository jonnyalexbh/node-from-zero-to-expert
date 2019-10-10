const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
let server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.static('public'));
let io = socketIO(server);

io.on('connection', (client) => {
  console.log('logged in user');
});

server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});
