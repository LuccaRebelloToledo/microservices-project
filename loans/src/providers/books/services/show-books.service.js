const { getBookById } = require("../axios/books")

const showBooksService = async (id) => {
  const book = await getBookById(id);

  return book;
}

module.exports = { showBooksService };