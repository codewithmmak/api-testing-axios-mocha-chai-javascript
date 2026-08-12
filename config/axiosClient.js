const axios = require('axios');
const config = require('../config/index');

// Create a configured axios instance
const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

module.exports = axiosInstance;