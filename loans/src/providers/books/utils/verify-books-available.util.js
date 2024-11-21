const { BookStatus } = require("../../../constants/book.constants");

const AppError = require('../../../shared/errors/app-error');
const AppErrorTypes = require('../../../shared/errors/app-error-types');
const { CONFLICT } = require("../../../shared/http/http-status-code");

const verifyBooksAvailable = (book) => {
  if (book.status !== BookStatus.AVAILABLE) {
    throw new AppError(AppErrorTypes.loans.cannotBeLoaned, CONFLICT);
  }
}

module.exports = verifyBooksAvailable;