const axios = require('axios');

const getPlaceLatLng = async (dir) => {
  const encodeUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: { 'x-rapidapi-key': '9f338e8f57msh3c2d31501a8cd23p1b9fe6jsnd52601e97653' }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`no results for ${dir}`);
  }

  const { name: address, lat, lon: lng } = resp.data.Results[0];

  return {
    address,
    lat,
    lng
  }
}

module.exports = {
  getPlaceLatLng
}
