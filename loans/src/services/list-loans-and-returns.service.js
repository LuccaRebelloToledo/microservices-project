const { Loan } = require("../models");

const AppError = require("../shared/errors/app-error");
const AppErrorTypes = require("../shared/errors/app-error-types");
const { NOT_FOUND } = require("../shared/http/http-status-code");

const listLoansAndReturnsService = async () => {
  const loans = await Loan.findAll({
    order: [["createdAt", "DESC"]],
  });

  if (!loans?.length) {
    throw new AppError(AppErrorTypes.loans.notFound, NOT_FOUND)
  }

  return loans;
}

module.exports = listLoansAndReturnsService;