const { z } = require('zod');

const REQUIRED_MESSAGE = (field) => `${field} é um campo obrigatório!`;

const idSchema = (field) => z.number({ message: REQUIRED_MESSAGE(`${field}`) }).positive({ message: `${field} deve ser um número positivo.` }).min(1, `${field} deve ser maior que 0.`);

const createLoansSchema = z.object({
  userId: idSchema('userId'),
  bookId: idSchema('bookId'),
});

const createReturnsSchema = z.object({
  id: idSchema('id'),
});

module.exports = {
  createLoansSchema,
  createReturnsSchema,
};
