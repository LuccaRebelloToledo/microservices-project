const { ZodError } = require('zod');

const { getReasonPhrase } = require('http-status-codes');

const AppError = require('../errors/app-error')

const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../http/http-status-code')

const globalErrorHandler = (err, req, res, next) => {
  console.error(err);

  if(err instanceof ZodError) {
    const errors = err.issues.map(issue => {
      return issue.message
  });

    return res.status(BAD_REQUEST).json({ statusCode: BAD_REQUEST, error: getReasonPhrase(BAD_REQUEST), message: errors.join(';') });
  }

  if(err instanceof AppError) {
    const statusCode = err.statusCode;
    const message = err.message;

    return res.status(statusCode).json({ statusCode, error: getReasonPhrase(statusCode), message });
  }

  return res.status(INTERNAL_SERVER_ERROR).json({ statusCode: INTERNAL_SERVER_ERROR, error: getReasonPhrase(INTERNAL_SERVER_ERROR), message: 'Something is wrong.' });
}

module.exports = globalErrorHandler;