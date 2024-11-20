const { showBooksSchema, createBooksSchema, updateBooksAvailableSchema } = require('../schemas/book.schema');

const listBooks = require('../services/list-books.service');
const showBooks = require('../services/show-books.service');
const createBooks = require('../services/create-books.service');
const updateBooksAvailable = require('../services/update-books-available.service');

const { CREATED } = require('../shared/http/http-status-code');

class BookController {
  async list(_req, res) {
    const books = await listBooks();

    return res.json(books);
  }

  async show(req, res) {
    const id = parseInt(req.params.id, 10);

    await showBooksSchema.parseAsync({ id });

    const book = await showBooks(id);

    return res.json(book);
  }

  async create(req, res) {
    const bookData = req.body;

    await createBooksSchema.parseAsync(bookData);

    const createdBook = await createBooks(bookData);

    return res.status(CREATED).json(createdBook);
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    await showBooksSchema.parseAsync({ id });

    const availableData = req.body;
    await updateBooksAvailableSchema.parseAsync(availableData);

    const updatedBook = await updateBooksAvailable({ id, ...availableData });

    return res.json(updatedBook);
  }
}

module.exports = BookController;