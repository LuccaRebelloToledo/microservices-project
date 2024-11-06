const { User } = require('../models');

const validateUserUniqueness = require('../utils/validate-user-uniqueness.util');

const createUsers = async (userDto) => {
  await validateUserUniqueness(userDto.email, userDto.cpf);

  return await User.create(userDto);
}

module.exports = createUsers;
