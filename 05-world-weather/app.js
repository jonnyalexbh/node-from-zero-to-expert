const axios = require('axios');

const argv = require('yargs').options({
  address: {
    alias: 'd',
    description: 'city address to get the weather',
    demand: true
  }
}).argv;

const encodeUrl = encodeURI(argv.address);

const instance = axios.create({
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
  headers: { 'x-rapidapi-key': '9f338e8f57msh3c2d31501a8cd23p1b9fe6jsnd52601e97653' }
});

instance.get()
  .then(resp => {
    console.log(resp.data.Results[0]);
  }).catch(err => {
    console.log('ERROR!!!!!', err);
  });
