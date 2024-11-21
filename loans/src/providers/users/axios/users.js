const { createAxios } = require('../../axios/axios');

const env = require('node:process').env;

const USERS_SERVICE_URL = env.USERS_SERVICE_URL;
const BASE_PATH = '/USERS';

const usersAxios = createAxios(USERS_SERVICE_URL);

const getUserById = async (id) => {
  const { data } = await usersAxios.get(`${BASE_PATH}/${id}`);

  return data;
}

module.exports = { getUserById };