const { Book } = require('../models');

const validateBookUniqueness = require('../utils/validate-book-uniqueness.util');

const createBooks = async (bookDto) => {
    await validateBookUniqueness(bookDto.title, bookDto.author);

    return await Book.create(bookDto);
}

module.exports = createBooks;