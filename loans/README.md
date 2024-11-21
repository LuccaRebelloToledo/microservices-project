# loans-service

This service is responsible for managing loans in the microservices project.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Starting the Service](#starting-the-service)
- [Usage](#usage)
  - [Create a Loan](#create-a-loan)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/LuccaRebelloToledo/microservices-project.git
   cd microservices-project/loans
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

  To start the service, run the following commands from the loans directory:

  ```sh
  npm install
  npm start
  ```

## Usage

### Create a Loan

  To create a loan, you can use the following example with curl or any API client like Insomnia.

  #### Endpoint
  ```sh
  POST /loans
  ```

  #### Request Body
  ```json
  {
    "userId": 1,
    "bookId": 1,
  }
  ```

  ### Example using curl
  ```sh
  curl -X POST http://localhost:4000/loans \
     -H "Content-Type: application/json" \
     -d '{
          "userId": 1,
          "bookId": 1,
        }'
  ```

  ### Response
  ```json
    {
      "id": 1,
      "userId": 1,
      "bookId": 1,
      "type": "EMPRÉSTIMO",
      "updatedAt": "2024-11-06T00:04:21.640Z",
      "createdAt": "2024-11-06T00:04:21.640Z"
    }
  ```

## Additional Information

  - Make sure the port defined in the .env file is not in use by other applications.
  - You can stop the service by pressing Ctrl+C in the terminal where the service is running.
  - For development purposes, you can modify the source code and restart the service as needed.