const { Loan } = require("../models")

const findLoanByUserAndBookId = async (userId, bookId) => {
  const loan = await Loan.findOne({
    where: {
      userId,
      bookId
    },
    order: [["createdAt", "DESC"]],
  });

  return loan;
}

module.exports = findLoanByUserAndBookId;