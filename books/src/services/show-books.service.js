const { Book } = require('../models');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { NOT_FOUND } = require('../shared/http/http-status-code');

const showBooks = async (id) => {
    const book = await Book.findOne({ where: { id } });

    if (!book) {
        throw new AppError(AppErrorTypes.books.notFound, NOT_FOUND);
    }

    return book;
}

module.exports = showBooks;