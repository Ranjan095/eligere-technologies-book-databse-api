# Book Database API

This project involves creating a RESTful API for managing a simple book database. The API provides endpoints for clients to perform Create, Read, Update, and Delete (CRUD) operations on book records. Additionally, the project includes user authentication and authorization to secure the API and ensure that only authorized users can access certain endpoints.

## Features

- User authentication (login and registration)
- JWT-based token authentication
- Middleware for permission checks
- CRUD operations for book records

## API Documentation

For detailed API documentation, please visit the [Postman Documentation](https://documenter.getpostman.com/view/25728232/2sA3QterqM).



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ranjan095/eligere-technologies-book-databse-api.git
   ```

2. Navigate to the project directory:

3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=your_port_number
   MONGO_URL=your_mongodb_connection_string
   SALT_ROUND=5
   SECRET_TOKEN=your_jwt_secret_key
   ```

2. Replace `your_port_number`, `your_mongodb_connection_string`, and `your_jwt_secret_key` with your actual values.

## Usage

1. Start the server:

   ```bash
   npm run server
   ```

2. Access the application at `http://localhost:your_port_number`.

## Endpoints

### Authentication

- **POST /users/create**

  - Registers a new user.
  - Request body:
    ```json
    {
      "name": "example",
      "email": "example@example.com",
      "password": "password123"
    }
    ```

- **POST /users/login**
  - Authenticates a user and returns a JWT token.
  - Request body:
    ```json
    {
      "email": "example@gmail.com",
      "password": "password123"
    }
    ```

### Book Management

- **POST /books/create**

  - Creates a new book record.
  - token is handled by the server if it's not work then send in header `Authorization: Bearer <token>`.
  - Request body:

    ```json
    {
          "title": "Book Title",
          "isbn": "123-4567890123",
          "publicationDate":"01-10-2024",
    },


    ```

- **GET /books**

  - Retrieves a list of all books.

- **PATCH /books/update?bookId=6655cf314a38b5e8cfd159a0**

  - Updates an existing book record by ID.
  <!-- - Requires `Authorization: Bearer <token>` header. -->
  - Request body can include any of the book fields:
    ```json
    {
      "title": "Updated Title"
    }
    ```

- **DELETE /books/delete?bookId=6655cf314a38b5e8cfd159a0**
  - Deletes a book record by ID.
  <!-- - Requires `Authorization: Bearer <token>` header. -->
