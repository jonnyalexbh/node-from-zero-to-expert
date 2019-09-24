// command to establish connection
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('desk')) {
  window.location = 'index.html';
  throw new Error('the desk is necessary');
}

var desk = searchParams.get('desk');
var label = $('small');

console.log(desk);
$('h1').text('Desk ' + desk);

$('button').on('click', function () {

  socket.emit('attendTicket', { desk: desk }, function (resp) {

    console.log(resp);
    if (resp === 'there are not tickets') {
      label.text(resp);
      alert(resp);
      return;
    }

    label.text('Ticket ' + resp.number);
  });

});
