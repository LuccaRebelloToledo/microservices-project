const { Router } = require('express');

const UserController = require('../controllers/user.controller');

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', userController.list);

usersRouter.get('/:id', userController.show);

usersRouter.post('/', userController.create);

module.exports = usersRouter; 