require('dotenv').config();

const express = require('express');
require('express-async-errors')

const globalErrorHandler = require('./shared/middlewares/global-error-handler.middleware');

const usersRouter = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());

app.use('/users', usersRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Users Service running at port: ${PORT}`);
})