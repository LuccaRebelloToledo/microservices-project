const AppErrorTypes = {
  users: {
    emailAlreadyExists: 'The provided email is already in use.',
    cpfAlreadyExists: 'The provided CPF is already in use.',
    notFound: 'The user(s) could not be found.',
    birthDateIsInFuture: 'The provided birth date is in the future.'
  }
}

module.exports = AppErrorTypes;