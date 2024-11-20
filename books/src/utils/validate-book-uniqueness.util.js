const findBookByTitleAndAuthor = require('../services/find-book-by-title-and-author.service');

const AppError = require('../shared/errors/app-error');
const AppErrorTypes = require('../shared/errors/app-error-types');
const { CONFLICT } = require('../shared/http/http-status-code');

const validateBookUniqueness = async (title, author) => {
    const existingWithAll = await findBookByTitleAndAuthor(title, author);
    
    if (existingWithAll) {
        throw new AppError(AppErrorTypes.books.alreadyExists, CONFLICT);
    }
}

module.exports = validateBookUniqueness;