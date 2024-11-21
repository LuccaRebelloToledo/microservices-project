const axios = require('axios');

const createAxios = (baseURL) => {
  return axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  });
}

module.exports = { createAxios }