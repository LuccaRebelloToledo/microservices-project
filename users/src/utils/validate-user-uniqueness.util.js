const findUserByCpf = require('../services/find-user-by-cpf.service');
const findUserByEmail = require('../services/find-user-by-email.service');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { CONFLICT } = require('../shared/http/http-status-code');

const validateUserUniqueness = async (email, cpf) => {
  const [existingUserByEmail, existingUserByCpf] = await Promise.all([
    findUserByEmail(email),
    findUserByCpf(cpf)
  ]);

  if (existingUserByEmail) {
    throw new AppError(AppErrorTypes.users.emailAlreadyExists, CONFLICT);
  }

  if (existingUserByCpf) {
    throw new AppError(AppErrorTypes.users.cpfAlreadyExists, CONFLICT);
  }
}

module.exports = validateUserUniqueness;