const fs = require('fs');

class Ticket {
  constructor(number, desk) {
    this.number = number;
    this.desk = desk;
  }
}

class TicketControl {
  constructor() {
    this.latest = 0;
    this.today = new Date().getDate();
    this.tickets = [];
    this.latest4 = [];

    let data = require('../data/data.json');

    if (data.today === this.today) {
      this.latest = data.latest;
      this.tickets = data.tickets;
      this.latest4 = data.latest4;
    } else {
      this.resetCount();
    }

  }

  nextTicket() {
    this.latest += 1;
    let ticket = new Ticket(this.latest, null);
    this.tickets.push(ticket);

    this.recordFile();
    return `Ticket ${this.latest}`;
  }

  getLastTicket() {
    return `Ticket ${this.latest}`;
  }

  attendTicket(desk) {
    if (this.tickets.length === 0) {
      return 'there are not tickets';
    }

    let numTicket = this.tickets[0].number;
    this.tickets.shift();

    let attendTicket = new Ticket(numTicket, desk);

    this.latest4.unshift(attendTicket);

    if (this.latest4.length > 4) {
      this.latest4.splice(-1, 1); // borra el último
    }

    console.log('Last 4');
    console.log(this.latest4);

    this.recordFile();
    return attendTicket;
  }

  resetCount() {
    this.latest = 0;
    this.tickets = [];
    this.latest4 = [];

    console.log('The system has been initialized');
    this.recordFile();
  }

  recordFile() {
    let jsonData = {
      latest: this.latest,
      today: this.today,
      tickets: this.tickets,
      latest4: this.latest4
    }

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync('./server/data/data.json', jsonDataString);
  }
}

module.exports = {
  TicketControl
}
