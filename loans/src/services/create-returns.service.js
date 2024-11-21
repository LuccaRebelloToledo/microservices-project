const { Loan } = require("../models");

const { BookStatus } = require("../constants/book.constants");
const { LoanType } = require("../constants/loan.constants");

const { getBookById, updateBookStatus } = require("../providers/books/axios/books");
const { getUserById } = require("../providers/users/axios/users");

const verifyBooksBorrowed = require("../providers/books/utils/verify-books-borrowed.util");

const findLoanByUserAndBookId = require("./find-loan-by-user-and-book-ids.service");
const showLoansService = require("./show-loans.service");

const AppError = require("../shared/errors/app-error");
const AppErrorTypes = require("../shared/errors/app-error-types");
const { CONFLICT } = require("../shared/http/http-status-code");

const createReturnsService = async (id) => {
  const loan = await showLoansService(id);

  if (loan.type !== LoanType.LOAN) {
    throw new AppError(AppErrorTypes.loans.cannotBeReturned, CONFLICT);
  }

  const { userId, bookId } = loan;

  const [user, book] = await Promise.all([getUserById(userId), getBookById(bookId)]);

  verifyBooksBorrowed(book);

  const lastRegistry = await verifyIfLastRegistryIsLoan(userId, bookId);

  if (lastRegistry.id != loan.id) {
    throw new AppError(AppErrorTypes.loans.userHasAnotherLoan, CONFLICT);
  }

  await updateBookStatus(book.id, BookStatus.AVAILABLE);

  const createdReturn = await Loan.create({ userId: user.id, bookId: book.id, type: LoanType.RETURN })
  
  return createdReturn;
}

const verifyIfLastRegistryIsLoan = async (userId, bookId) => {
  const loan = await findLoanByUserAndBookId(userId, bookId);

  if (!loan || loan.type !== LoanType.LOAN) {
    throw new AppError(AppErrorTypes.loans.userHasNoLoan, CONFLICT);
  }

  return loan;
}

module.exports = createReturnsService;