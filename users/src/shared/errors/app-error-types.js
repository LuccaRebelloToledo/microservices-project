const AppErrorTypes = {
  users: {
    emailAlreadyExists: 'O e-mail fornecido já está em uso.',
    cpfAlreadyExists: 'O CPF fornecido já está em uso.',
    notFound: 'O(s) usuário(s) não foi(foram) encontrado(s).',
    birthDateIsInFuture: 'A data de nascimento fornecida está no futuro.'
  }
}

module.exports = AppErrorTypes;