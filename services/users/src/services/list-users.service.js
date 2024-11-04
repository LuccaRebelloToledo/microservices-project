const { User } = require('../models');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { NOT_FOUND } = require('../shared/http/http-status-code');

const listUsers = async () => {
  const users = await User.findAll();

  if(!users.length) {
    throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
  }

  return users;
}

module.exports = listUsers;
