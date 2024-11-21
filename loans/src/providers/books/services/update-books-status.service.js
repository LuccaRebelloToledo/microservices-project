const { updateBookStatus } = require("../axios/books")

const updateBookStatusService = async (book, status) => {
  const book = await updateBookStatus(book.id, status);

  return book;
}

module.exports = { updateBookStatusService };