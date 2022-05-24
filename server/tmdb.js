const axios = require('axios');

const tmdb = axios.default.create({
  baseURL: 'https://api.themoviedb.org/3'
});

tmdb.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: 'API_KEY'
  };
  return config;
});

tmdb.interceptors.response.use(res => {
  return res.data;
});

module.exports = tmdb;
