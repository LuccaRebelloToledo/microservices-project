const { User } = require('../models');

const findUserByCpf = async (cpf) => {
    return await User.findOne({ where: { cpf } });
}

module.exports = findUserByCpf;