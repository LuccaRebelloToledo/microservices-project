const { Loan } = require("../models");

const AppError = require("../shared/errors/app-error");
const AppErrorTypes = require("../shared/errors/app-error-types");
const { NOT_FOUND } = require("../shared/http/http-status-code");

const showLoansService = async (id) => {
  const loan = await Loan.findOne({
    where: {
      id
    }
  });

  if (!loan) {
    throw new AppError(AppErrorTypes.loans.notFound, NOT_FOUND)
  }

  return loan;
}

module.exports = showLoansService;