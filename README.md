# Microservices Project 🚀

Este repositório contém a configuração de três microserviços: **Users**, **Books**, e **Loans**, todos containerizados com Docker e orquestrados com Docker Compose. Esses serviços gerenciam informações de usuários, livros e registros de empréstimos.

## Requisitos 📋
- **Node.js**: Versão 20 ou superior
- **Docker**: Instalada e em execução 🐳
- **Docker Compose**: Instalado e compatível com sua versão do Docker

## Visão Geral dos Serviços 🛠️

### 1. **Users Service** 👤
Gerencia dados de usuários, incluindo criação, atualizações e recuperação.

### 2. **Books Service** 📚
Gerencia o inventário de livros e operações relacionadas.

### 3. **Loans Service** 🔄
Rastreia empréstimos de livros, conectando usuários e livros.

## Configuração e Uso ⚙️

### Passo 1: Configuração do Ambiente 🌍
1. Crie um arquivo `.env` na raiz do diretório.
2. Defina as seguintes variáveis de ambiente:
   ```bash
   USERS_PORT=<porta_desejada_para_o_serviço_de_usuários>
   BOOKS_PORT=<porta_desejada_para_o_serviço_de_livros>
   LOANS_PORT=<porta_desejada_para_o_serviço_de_empréstimos>

### Passo 2: Subindo os Serviços 🌍
1. Construa e inicie os serviços usando o Docker Compose:

```bash
   docker-compose up --build -d
```

2. Verificar serviços em execução:

```bash
    docker ps
```

### Passo 3: Acessando os Serviços 🌐
1. Acesse cada serviço no seu navegador ou via um cliente API como Insomnia ou Postman:

- **User Service**: (http://localhost:<USERS_PORT>)
- **Book Service**: (http://localhost:<BOOKS_PORT>)
- **Loan Service**: (http://localhost:<LOANS_PORT>)

### Passo 4: Testando com Insomnia 🧪
1. Importe o arquivo de configuração do Insomnia para o seu workspace no Insomnia.
2. Use os endpoints preconfigurados para interagir com os serviços.

Para importar o arquivo do Insomnia:
- Abra o Insomnia
- Vá até Workspace -> Import
- Selecione o arquivo `Insomnia_2024-11-20.json` da pasta `insomnia/`
- 
### Endpoints Preconfigurados no Insomnia
Aqui estão alguns dos principais endpoints configurados no arquivo do Insomnia:

Users Service:

- `GET /users`: Lista todos os usuários.
- `POST /users`: Cria um novo usuário.
- `GET /users/:id`: Obtém detalhes de um usuário específico.

Books Service:

- `GET /books`: Lista todos os livros.
- `POST /books`: Cria um novo livro.
- `PATCH /books/:id`: Atualiza o status de um livro (por exemplo, marcando como "EMPRESTADO").

Loans Service:

- `GET /loans`: Lista todos os empréstimos.
- `POST /loans`: Cria um novo empréstimo.
- `POST /loans/:id/returns`: Marca um empréstimo como devolvido.

### Notas de Desenvolvimento 🛠️
- Logs dos Containers: Para visualizar os logs de um serviço específico, execute:

```bash
docker logs <container_name>
Substitua <container_name> pelo nome do container, como users_service.
```

Parar os Serviços:

```bash
docker-compose down
```

Reconstruir os Serviços (quando houver mudanças no código ou dependências):

```bash
docker-compose up --build -d
```

### Estrutura de Diretórios 📂
```
microservices-project/
├── users/                     # Código e Dockerfile para o serviço de usuários
├── books/                     # Código e Dockerfile para o serviço de livros
├── loans/                     # Código e Dockerfile para o serviço de empréstimos
├── docker-compose.yml         # Arquivo para orquestrar os serviços com Docker Compose
├── .env.example               # Arquivo de exemplo para configurar as variáveis de ambiente
└── insomnia/                  
    └── Insomnia_2024-11-20.json # Arquivo de configuração do Insomnia para testes de API
```

Cada serviço (`users/`, `books/`, `loans/`) contém seu próprio Dockerfile e código de aplicação.
O arquivo `.env.example` serve como modelo para as variáveis de ambiente necessárias.
A pasta `insomnia/` contém o arquivo pré-configurado do Insomnia para testar as APIs.

