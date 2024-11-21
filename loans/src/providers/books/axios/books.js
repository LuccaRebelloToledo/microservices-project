const { createAxios } = require('../../axios/axios');

const env = require('node:process').env;

const BOOKS_SERVICE_URL = env.BOOKS_SERVICE_URL;
const BASE_PATH = '/books';

const booksAxios = createAxios(BOOKS_SERVICE_URL);

const getBookById = async (id) => {
  const { data } = await booksAxios.get(`${BASE_PATH}/${id}`);

  return data;
}

const updateBookStatus = async (id, status) => {
  const { data } = await booksAxios.patch(`${BASE_PATH}/${id}`, { status });

  return data;
}

module.exports = { getBookById, updateBookStatus };