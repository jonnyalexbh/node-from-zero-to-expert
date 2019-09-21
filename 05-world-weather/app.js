const place = require('./place');
const weather = require('./weather');

const argv = require('yargs').options({
  address: {
    alias: 'd',
    description: 'city address to get the weather',
    demand: true
  }
}).argv;

// place.getPlaceLatLng(argv.address)
//   .then(console.log)

// weather.getWeather(40.750000, -74.000000)
//   .then(console.log)
//   .catch(console.log)

const getInfo = async (address) => {
  try {
    const coords = await place.getPlaceLatLng(address);
    const temperature = await weather.getWeather(coords.lat, coords.lng);
    return `the weather of ${coords.address} es de ${temperature}.`;
  } catch (e) {
    return `the weather could not be determined ${address}`;
  }
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log);
