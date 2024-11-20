const { Book } = require('../models');

const findBookByTitleAndAuthor = async (title, author) => {
    return await Book.findOne({ where: { title, author } });
}

module.exports = findBookByTitleAndAuthor;