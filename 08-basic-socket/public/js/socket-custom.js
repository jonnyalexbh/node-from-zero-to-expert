var socket = io();

// on listen to information
socket.on('connect', function () {
  console.log('connected to the server');
})

socket.on('disconnect', function () {
  console.log('we lost connection to the server');
})

// emit send information
socket.emit('sendMessage', {
  user: 'jonnyalexbh',
  message: 'Hola Mundo'
}, function (resp) {
  console.log('server response', resp);
})
