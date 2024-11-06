const { User } = require('../models');

const validateBirthDate = require('../utils/validate-birth-date.util');
const validateUserUniqueness = require('../utils/validate-user-uniqueness.util');

const createUsers = async (userDto) => {
  validateBirthDate(userDto.birthDate);
  
  await validateUserUniqueness(userDto.email, userDto.cpf);

  return await User.create(userDto);
}

module.exports = createUsers;
