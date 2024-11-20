const { Router } = require('express');

const BookController = require('../controllers/book.controller');

const booksRouter = Router();
const bookController = new BookController();

booksRouter.get('/', bookController.list);

booksRouter.get('/:id', bookController.show);

booksRouter.post('/', bookController.create);

booksRouter.put('/:id', bookController.update);

module.exports = booksRouter;