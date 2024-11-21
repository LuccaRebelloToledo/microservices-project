const AppErrorTypes = {
  loans: {
    cannotBeLoaned: 'O livro não pode ser emprestado no momento.',
    cannotBeReturned: 'O livro não pode ser devolvido no momento.',
    userHasNoLoan: 'O usuário não possui empréstimos ativos com o livro especificado.',
    notFound: 'Nenhum empréstimo foi encontrado.',
    userHasAnotherLoan: 'O usuário possui outro empréstimo ativo.'
  }
}

module.exports = AppErrorTypes;