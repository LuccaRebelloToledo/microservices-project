const { z } = require('zod');

const { BookStatus } = require('../constants/book.constants');

const REQUIRED_MESSAGE = (field) => `${field} é um campo obrigatório!`;

const showBooksSchema = z.object({
  id: z.number({ message: REQUIRED_MESSAGE('id') }).positive({ message: 'O id deve ser um número positivo.' }).min(1, 'O id deve ser maior que 0.'),
});

const createBooksSchema = z.object({
  title: z.string({ message: REQUIRED_MESSAGE('title') }),
  author: z.string({ message: REQUIRED_MESSAGE('author') }),
});

const updateBooksStatusSchema = z.object({
  status: z.enum([BookStatus.AVAILABLE, BookStatus.BORROWED], { message: 'O status deve ser "DISPONÍVEL" ou "EMPRESTADO' })
});

module.exports = {
  showBooksSchema,
  createBooksSchema,
  updateBooksStatusSchema,
};
