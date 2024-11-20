const { Book } = require('../models');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { NOT_FOUND } = require('../shared/http/http-status-code');

const listBooks = async () => {
    const books = await Book.findAll();

    if (!books.length) {
        throw new AppError(AppErrorTypes.books.notFound, NOT_FOUND);
    }

    return books;
}

module.exports = listBooks;
