const { Loan } = require("../models");

const { getBookById, updateBookStatus } = require("../providers/books/axios/books");
const { getUserById } = require("../providers/users/axios/users");

const verifyBooksAvailable = require("../providers/books/utils/verify-books-available.util");

const { BookStatus } = require("../constants/book.constants");
const { LoanType } = require("../constants/loan.constants");

const createLoansService = async (data) => {
  const { userId, bookId } = data;

  const [user, book] = await Promise.all([getUserById(userId), getBookById(bookId)]);

  verifyBooksAvailable(book);

  await updateBookStatus(book.id, BookStatus.BORROWED);
  const loan = await Loan.create({ userId: user.id, bookId: book.id, type: LoanType.LOAN });
  
  return loan;
}

module.exports = createLoansService;