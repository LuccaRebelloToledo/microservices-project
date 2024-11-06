require('dotenv').config();

const express = require('express');
require('express-async-errors')

const globalErrorHandler = require('./shared/middlewares/global-error-handler.middleware');

const booksRouter = require('./routes/book.routes');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());

app.use(booksRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Books Service running at port: ${PORT}`);
})