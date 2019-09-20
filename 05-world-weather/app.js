const argv = require('yargs').options({
  address: {
    alias: 'd',
    description: 'city address to get the weather',
    demand: true
  }
}).argv;

console.log(argv.address);
