const { io } = require('../server');

io.on('connection', (client) => {
  console.log('logged in user');

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // listen to the client
  client.on('sendMessage', (data, callback) => {

    console.log(data);
    client.broadcast.emit('sendMessage', data);

    // if (message.user) {
    //   callback({
    //     resp: 'all went well!'
    //   });
    // } else {
    //   callback({
    //     resp: 'everything went wrong!!!!!!!!!!!!'
    //   });
    // }

  });
});
