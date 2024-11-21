const { createLoansSchema, createReturnsSchema } = require("../schemas/loan.schema");

const createLoansService = require("../services/create-loans.service");
const createReturnsService = require("../services/create-returns.service");
const listLoansAndReturnsService = require("../services/list-loans-and-returns.service");

const { CREATED } = require("../shared/http/http-status-code");

class LoanController {
  async list(_req, res) {
    const loans = await listLoansAndReturnsService();

    return res.json(loans);
  }

  async createLoans(req, res) {
    const loanData = req.body;

    await createLoansSchema.parseAsync(loanData);

    const createdLoan = await createLoansService(loanData);

    return res.status(CREATED).json(createdLoan);
  }

  async createReturns(req, res) {
    const id = parseInt(req.params.id, 10);

    await createReturnsSchema.parseAsync({ id });

    const createdReturn = await createReturnsService(id);

    return res.status(CREATED).json(createdReturn);
  }
}

module.exports = LoanController;