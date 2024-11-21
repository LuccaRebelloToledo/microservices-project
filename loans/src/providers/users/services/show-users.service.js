const { getUserById } = require("../axios/users")

const showUsersService = async (id) => {
  const user = await getUserById(id);

  return user;
}

module.exports = { showUsersService };