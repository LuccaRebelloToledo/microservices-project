const { showUsersSchema, createUsersSchema } = require('../schemas/user.schema');

const listUsers = require('../services/list-users.service');
const showUsers = require('../services/show-users.service');
const createUsers = require('../services/create-users.service');

const { CREATED } = require('../shared/http/http-status-code');

class UserController {
  async list(_req, res) {
    const users = await listUsers();

    return res.json(users);
  }

  async show(req, res) {
    const id = parseInt(req.params.id, 10);

    await showUsersSchema.parseAsync({ id });

    console.log(id)

    const user = await showUsers(id);

    return res.json(user);
  }

  async create(req, res) {
    const user = req.body;

    await createUsersSchema.parseAsync(user);

    const createdUser = await createUsers(user);

    return res.status(CREATED).json(createdUser);
  }
}

module.exports = UserController;