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

    let data = require('../data/data.json');

    if (data.today === this.today) {
      this.latest = data.latest;
      this.tickets = data.tickets;
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

  resetCount() {
    this.latest = 0;
    this.tickets = [];
    console.log('The system has been initialized');
    this.recordFile();
  }

  recordFile() {
    let jsonData = {
      latest: this.latest,
      today: this.today,
      tickets: this.tickets
    }

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync('./server/data/data.json', jsonDataString);
  }
}

module.exports = {
  TicketControl
}
