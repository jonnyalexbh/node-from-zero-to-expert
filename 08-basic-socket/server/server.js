const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// IO = this is the backend communication
let io = socketIO(server);

io.on('connection', (client) => {
  console.log('logged in user');

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // listen to the client
  client.on('sendMessage', (message, callback) => {
    console.log(message);
    if (message.user) {
      callback({
        resp: 'all went well!'
      });
    } else {
      callback({
        resp: 'everything went wrong!!!!!!!!!!!!'
      });
    }
  });
});

server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});
