const { z } = require('zod');

const REQUIRED_MESSAGE = (field) => `${field} é um campo obrigatório!`;

const showBooksSchema = z.object({
  id: z.number({ message: REQUIRED_MESSAGE('id') }).positive({ message: 'O id deve ser um número positivo.' }).min(1, 'O id deve ser maior que 0.'),
});

const createBooksSchema = z.object({
  title: z.string({ message: REQUIRED_MESSAGE('title') }),
  author: z.string({ message: REQUIRED_MESSAGE('author') }),
});

const updateBooksAvailableSchema = z.object({
  available: z.boolean({ message: REQUIRED_MESSAGE('available' )}),
})

module.exports = {
  showBooksSchema,
  createBooksSchema,
  updateBooksAvailableSchema,
};
