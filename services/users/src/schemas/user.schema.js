const { z } = require('zod')

const REQUIRED_MESSAGE = (field) => `${field} é um campo obrigatório!`;
const INVALID_EMAIL_MESSAGE = 'E-mail inválido.';
const MIN_LENGTH_MESSAGE = (length) => `Deve ter no mínimo ${length} caracteres.`;
const MIN_LENGTH_NAME = 5;
const MIN_CPF_LENGTH = 11;

const showUsersSchema = z.object({
    id: z.number({ message: REQUIRED_MESSAGE('id') }).positive({ message: 'O id deve ser um número positivo.' }).min(1, 'O id deve ser maior que 0.'),
});

const createUsersSchema = z.object({
    name: z.string({ message: REQUIRED_MESSAGE('name')  }).min(MIN_LENGTH_NAME, MIN_LENGTH_MESSAGE(MIN_LENGTH_NAME)),
    email: z.string({ message: REQUIRED_MESSAGE('email') }).email(INVALID_EMAIL_MESSAGE),
    cpf: z.string({ message: REQUIRED_MESSAGE('cpf') }).min(MIN_CPF_LENGTH, MIN_LENGTH_MESSAGE(MIN_CPF_LENGTH)),
    birthDate: z.string({ message: REQUIRED_MESSAGE('birthDate') }).date({ message: 'Data de nascimento inválida.' }),
});

module.exports = {
    showUsersSchema,
    createUsersSchema
};