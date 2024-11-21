const { Router } = require('express');

const LoanController = require('../controllers/loan.controller');

const loansRouter = Router();
const loanController = new LoanController();

loansRouter.get('/', loanController.list);

loansRouter.post('/', loanController.createLoans);

loansRouter.post('/:id/returns', loanController.createReturns);

module.exports = loansRouter;