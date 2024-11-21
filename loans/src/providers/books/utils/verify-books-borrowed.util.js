const { BookStatus } = require("../../../constants/book.constants");

const AppError = require('../../../shared/errors/app-error');
const AppErrorTypes = require('../../../shared/errors/app-error-types');
const { CONFLICT } = require("../../../shared/http/http-status-code");

const verifyBooksBorrowed = (book) => {
  if (book.status !== BookStatus.BORROWED) {
    throw new AppError(AppErrorTypes.loans.cannotBeReturned, CONFLICT);
  }
}

module.exports = verifyBooksBorrowed;