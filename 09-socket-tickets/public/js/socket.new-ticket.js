// command to establish connection
var socket = io();

var label = $('#lblNuevoTicket');

// on listen to information
socket.on('connect', function () {
  console.log('connected to the server');
})

socket.on('disconnect', function () {
  console.log('disconnected from server');
})

socket.on('actualState', function (resp) {
  console.log(resp);
  label.text(resp.actual);
});

$('button').on('click', function () {
  socket.emit('nextTicket', null, function (nextTicket) {
    label.text(nextTicket);
  });
})
