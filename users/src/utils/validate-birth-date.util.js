const AppError = require("../shared/errors/app-error");
const AppErrorTypes = require("../shared/errors/app-error-types");

const validateBirthDate = (birthDate) => {
  const parsedBirthDate = new Date(birthDate);
  const currentDate = new Date();

  if (parsedBirthDate > currentDate) {
    throw new AppError(AppErrorTypes.users.birthDateIsInFuture);
  }
}

module.exports = validateBirthDate;