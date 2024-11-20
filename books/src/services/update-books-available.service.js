const showBooks = require('./show-books.service')

const updateBooksAvailable = async ({ id, available }) => {
    const book = await showBooks(id);

    if (book.available !== available) {
        book.available = available;
        await book.save();
    }

    return book;
}

module.exports = updateBooksAvailable;
