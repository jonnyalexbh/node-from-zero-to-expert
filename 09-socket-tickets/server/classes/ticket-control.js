const fs = require('fs');

class TicketControl {
  constructor() {
    this.latest = 0;
    this.today = new Date().getDate();

    let data = require('../data/data.json');

    if (data.today === this.today) {
      this.latest = data.latest;
    } else {
      this.resetCount();
    }

  }

  nextTicket() {
    this.latest += 1;
    this.recordFile();
    return `Ticket ${this.latest}`;
  }

  resetCount() {
    this.latest = 0;
    console.log('The system has been initialized');
    this.recordFile();
  }

  recordFile() {
    let jsonData = {
      latest: this.latest = 0,
      today: this.today
    }

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync('./server/data/data.json', jsonDataString);
  }
}

module.exports = {
  TicketControl
}
