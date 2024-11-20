# books-service

This service is responsible for managing books in the microservices project.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Starting the Service](#starting-the-service)
- [Usage](#usage)
  - [Create a Book](#create-a-book)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/LuccaRebelloToledo/microservices-project.git
   cd microservices-project/books
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

  To start the service, run the following commands from the books directory:

  ```sh
  npm install
  npm start
  ```

## Usage

### Create a Book

  To create a book, you can use the following example with curl or any API client like Insomnia.

  #### Endpoint
  ```sh
  POST /books
  ```

  #### Request Body
  ```json
  {
    "title": "John Doe Life",
    "author": "John Doe",
  }
  ```

  ### Example using curl
  ```sh
  curl -X POST http://localhost:4000/books \
     -H "Content-Type: application/json" \
     -d '{
          "title": "John Doe Life",
          "author": "John Doe",
        }'
  ```

  ### Response
  ```json
    {
      "id": 1,
      "title": "John Doe Life",
      "author": "John Doe",
      "updatedAt": "2024-11-06T00:04:21.640Z",
      "createdAt": "2024-11-06T00:04:21.640Z"
    }
  ```

## Additional Information

  - Make sure the port defined in the .env file is not in use by other applications.
  - You can stop the service by pressing Ctrl+C in the terminal where the service is running.
  - For development purposes, you can modify the source code and restart the service as needed.