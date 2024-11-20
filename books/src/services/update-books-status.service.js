const showBooks = require('./show-books.service')

const updateBooksStatus = async ({ id, status }) => {
    const book = await showBooks(id);

    if (book.status !== status) {
        book.status = status;
        await book.save();
    }

    return book;
}

module.exports = updateBooksStatus;
