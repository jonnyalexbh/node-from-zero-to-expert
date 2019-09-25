const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControlticket = new TicketControl();

io.on('connection', (client) => {

  client.on('nextTicket', (data, callback) => {
    let nextTicket = ticketControlticket.nextTicket();
    console.log(nextTicket);
    callback(nextTicket);
  });

  client.emit('actualState', {
    actual: ticketControlticket.getLastTicket(),
    latest4: ticketControlticket.getlatest4()
  });

  client.on('attendTicket', (data, callback) => {

    if (!data.desk) {
      return callback({
        err: true,
        message: 'the desk is necessary'
      });
    }

    let attendTicket = ticketControlticket.attendTicket(data.desk);
    callback(attendTicket);

    // update / notify changes in the LAST 4
    client.broadcast.emit('latest4', {
      latest4: ticketControlticket.getlatest4()
    });

  });

});
