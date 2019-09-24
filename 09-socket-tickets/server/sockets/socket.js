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
    actual: ticketControlticket.getLastTicket()
  });

});
