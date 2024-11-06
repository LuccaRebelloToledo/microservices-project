# Users Service

This service is responsible for managing users in the microservices project.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Starting the Service](#starting-the-service)
- [Usage](#usage)
  - [Create a User](#create-a-user)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/microservices-project.git
   cd microservices-project/users
   ```

## Environment Variables

1. **Create the environment file**

  Create the environment file based on the environment file template:

  - **Unix-like (Linux/macOS):**
    ```sh
    cp .env.template .env
    ```

  - **Windows (Command Prompt):**
    ```sh
    copy .env.template .env
    ```

  - **Windows (PowerShell):**
    ```sh
    Copy-Item .env.template .env
    ```

2. **Edit the .env file**

  Open the .env file and set the necessary environment variables.

## Starting the Service

  To start the service, run the following commands from the users directory:

  ```sh
  npm install
  npm start
  ```

## Usage

### Create a User

  To create a user, you can use the following example with curl or any API client like Insomnia.

  #### Endpoint
  ```sh
  POST /users
  ```

  #### Request Body
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "cpf": "12345678900",
    "birthDate": "2002-04-01"
  }
  ```

  ### Example using curl
  ```sh
  curl -X POST http://localhost:4000/users \
     -H "Content-Type: application/json" \
     -d '{
          "name": "John Doe",
          "email": "john.doe@example.com",
          "cpf": "12345678900",
          "birthDate": "2002-04-01"
        }'
  ```

  ### Response
  ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "cpf": "12345678900",
      "birthDate": "2002-04-01T00:00:00.000Z",
      "updatedAt": "2024-11-06T00:04:21.640Z",
      "createdAt": "2024-11-06T00:04:21.640Z"
    }
  ```

## Additional Information

  - Make sure the port defined in the .env file is not in use by other applications.
  - You can stop the service by pressing Ctrl+C in the terminal where the service is running.
  - For development purposes, you can modify the source code and restart the service as needed.