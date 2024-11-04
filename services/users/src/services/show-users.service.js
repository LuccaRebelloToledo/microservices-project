const { User } = require('../models');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { NOT_FOUND } = require('../shared/http/http-status-code');

const showUsers = async (id) => {
  const user = await User.findOne({ where: { id } });

  if(!user) {
    throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
  }

  return user;
}

module.exports = showUsers;
