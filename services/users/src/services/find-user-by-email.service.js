const { User } = require('../models');

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
}

module.exports = findUserByEmail;