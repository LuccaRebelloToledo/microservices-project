# **Microservices Project** 🚀

This repository contains a setup for three microservices: **Users**, **Books**, and **Loans**, containerized using Docker and orchestrated with Docker Compose. These services collectively manage user information, books, and loan records.

## **Requirements** 📋

- **Node.js**: Version 20 or later  
- **Docker**: Installed and running 🐳
- **Docker Compose**: Installed and compatible with your Docker version 

## **Services Overview** 🛠️

### **1. Users Service** 👤  
Manages user data, including creation, updates, and retrieval.  

### **2. Books Service** 📚
Handles book inventory and related operations.  

### **3. Loans Service** 🔄
Tracks book loans, linking users and books.  

## **Setup & Usage** ⚙️

### **Step 1: Environment Configuration** 🌍
1. Create a `.env` file in the root directory.
2. Define the following environment variables:  
   ```dotenv
   USERS_PORT=<desired_users_service_port>
   BOOKS_PORT=<desired_books_service_port>
   LOANS_PORT=<desired_loans_service_port>
   ```

### **Step 2: Launch the Services** 🚀
1. Build and start the services using Docker Compose:
    ```sh
    docker-compose up --build -d
    ```
2. Verify the services are running:
    ```sh
    docker ps
    ```

### **Step 3: Access the Services** 🌐
Access each service in your browser or via an API client like Insomnia or Postman:
- **Users Service**: http://localhost:`USERS_PORT`
- **Books Service**: http://localhost:`BOOKS_PORT`
- **Loans Service**: http://localhost:`LOANS_PORT`

### **Step 4: Test with Insomnia** 🧪
1. Import the provided [Insomnia configuration](insomnia/Insomnia_2024-11-20.json) into your Insomnia workspace.
2. Use the pre-configured endpoints to interact with the services.

## **Development Notes** 🛠️
- **Container Logs**: To view logs for a specific service:
docker logs `container_name`
Replace `container_name` with the service container name, e.g., users_service.

- **Stopping Services**:
`docker-compose down`

- **Rebuilding Services** (when dependencies or code changes):
`docker-compose up --build -d`

## **Directory Structure** 📂
```
microservices-project/
├── users/
├── books/
├── loans/
├── docker-compose.yml
├── .env.example
└── insomnia/
└── Insomnia_2024-11-20.json
```

- Each service (`users/`, `books/`, `loans/`) contains its own Dockerfile and application code.
- The .env.example file provides a template for required environment variables.
- The insomnia/ folder contains a pre-configured Insomnia file for API testing