const fs = require('fs');

class TicketControl {
  constructor() {
    this.latest = 0;
    this.today = new Date().getDate();

    let data = require('../data/data.json');

    if (data.today === this.today) {

    } else {
      this.resetCount();
    }

  }

  resetCount() {
    let jsonData = {
      latest: this.latest = 0,
      today: this.today
    }

    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync('./server/data/data.json', jsonDataString);

    console.log('the system has been initialized');

  }
}

module.exports = {
  TicketControl
}
