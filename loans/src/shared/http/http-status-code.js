const { StatusCodes } = require('http-status-codes');

// 200
const CREATED = StatusCodes.CREATED;

// 400
const BAD_REQUEST = StatusCodes.BAD_REQUEST;
const NOT_FOUND = StatusCodes.NOT_FOUND;
const CONFLICT = StatusCodes.CONFLICT;

// 500
const INTERNAL_SERVER_ERROR = StatusCodes.INTERNAL_SERVER_ERROR;

module.exports = {
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  CONFLICT,
  INTERNAL_SERVER_ERROR
}