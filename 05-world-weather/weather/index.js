const axios = require('axios');

const baseUri = 'https://api.openweathermap.org/data/2.5/weather';
const appid = '32f843d833c38373032f825c4a92418a';

const getWeather = async (lat, lng) => {
  const resp = await axios.get(`${baseUri}?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`)
  return resp.data.main.temp;
}

module.exports = {
  getWeather
}
