const place = require('./place');
const weather = require('./weather');

const argv = require('yargs').options({
  address: {
    alias: 'd',
    description: 'city address to get the weather',
    demand: true
  }
}).argv;

place.getPlaceLatLng(argv.address)
  .then(console.log)

weather.getWeather(40.750000, -74.000000)
  .then(console.log)
  .catch(console.log)
