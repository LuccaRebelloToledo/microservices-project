require('dotenv').config();

const express = require('express');
require('express-async-errors')

const globalErrorHandler = require('./shared/middlewares/global-error-handler.middleware');

const loansRouter = require('./routes/loan.routes');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());

app.use(loansRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Loans Service running at port: ${PORT}`);
})