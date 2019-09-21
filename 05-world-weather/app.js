const place = require('./place');

const argv = require('yargs').options({
  address: {
    alias: 'd',
    description: 'city address to get the weather',
    demand: true
  }
}).argv;

place.getPlaceLatLng(argv.address)
  .then(console.log)
