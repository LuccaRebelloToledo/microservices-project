const { User } = require('../models');

const validateUserUniqueness = require('./validate-user-uniqueness.service');

const createUsers = async (userDto) => {
  await validateUserUniqueness(userDto.email, userDto.cpf);

  return await User.create(userDto);
}

module.exports = createUsers;
