# Backend Project

## Overview

This is a backend application designed to provide user management and authentication services.

## Technology Stack

- Node.js
- Express.js
- MongoDB (assumed based on typical backend setup)
- Mongoose (for database interactions)
- bcrypt (for password hashing)
- JSON Web Token (JWT) for authentication
- cors
- express-validator

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/your_database
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

## API Endpoints

### User Registration

- **URL:** `/users/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**

  - **Code:** 201 Created
  - **Content:**

    ```json
    {
      "user": {
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string",
        "password": "string",
        "_id": "string",
        "createdAt": "string",
        "updatedAt": "stringZ"
      },
      "token": "Generated token"
    }
    ```

### User Login

- **URL:** `/users/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**

  - **Code:** 201 Created
  - **Content:**

    ```json
    {
      "user": {
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string",
        "password": "string",
        "_id": "string",
        "createdAt": "string",
        "updatedAt": "stringZ"
      },
      "token": "Generated token"
    }
    ```

### User Profile

- **URL:** `/users/profile`
- **Method:** `get`
- **Request A Valid Token:**
  ```json
  Authorization:Bearer <token>
  ```
- **Success Response:**

  - **Code:** 200 ok
  - **Content:**

    ```json
    {
      "user": {
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "email": "string",
        "_id": "string",
        "createdAt": "string",
        "updatedAt": "stringZ"
      },
      "token": "Generated token"
    }
    ```

### User Logout

- **URL:** `/users/logout`
- **Method:** `GET`
- **Request A Valid Token:**
  ```json
  Authorization:Bearer <token>
  ```
- **Success Response:**

  - **Code:** 200 OK
  - **Content:**

    ```json
    {
      "message": "Logout successful"
    }
    ```

### Captain Registration

- **URL:** `/captains/register`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "vehicleType": "string",
      "capacity": "number"
    }
  }
  ```

- **Success Response:**

  - **Code:** 201 Created
  - **Content:**

    ```json
    {
      "captain": {
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "vehicle": {
          "color": "string",
          "plate": "string",
          "vehicleType": "string",
          "capacity": "number"
        },
        "email": "string",
        "password": "string",
        "_id": "string",
        "createdAt": "string",
        "updatedAt": "stringZ"
      },
      "token": "Generated token"
    }
    ```

### Captain Login

- **URL:** `/captains/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**

  - **Code:** 201 Created
  - **Content:**

    ```json
    {
      "captain": {
        "fullName": {
          "firstName": "string",
          "lastName": "string"
        },
        "vehicle": {
          "color": "string",
          "plate": "string",
          "vehicleType": "string",
          "capacity": "number"
        },
        "email": "string",
        "password": "string",
        "_id": "string",
        "createdAt": "string",
        "updatedAt": "stringZ"
      },
      "token": "Generated token"
    }
    ```

### Captain Profile

- **URL:** `/captains/profile`
- **Method:** `get`
- **Request A Valid Token:**
  ```json
  Authorization:Bearer <token>
  ```
- **Success Response:**

  - **Code:** 200 ok
  - **Content:**

    ```json
    {
      "capain": {},
      "token": "Generated token"
    }
    ```

### Captain Logout

- **URL:** `/captains/logout`
- **Method:** `GET`
- **Request A Valid Token:**
  ```json
  Authorization:Bearer <token>
  ```
- **Success Response:**

  - **Code:** 200 OK
  - **Content:**

    ```json
    {
      "message": "Logout successful"
    }
    ```

## Planned Future Endpoints

- User Login
- User Profile Retrieval
- User Profile Update
- Password Reset
- User Authentication Middleware

## Authentication Strategy

- Passwords will be hashed before storing in the database
- JWT will be used for maintaining user sessions
- Middleware will be implemented to protect routes requiring authentication

## Error Handling

- Centralized error handling mechanism
- Descriptive error messages
- Appropriate HTTP status codes

## Security Considerations

- Password hashing
- Input validation
- Protection against common web vulnerabilities
- Rate limiting
- CORS configuration

## Testing

- Unit tests for individual components
- Integration tests for API endpoints
- Mock database for testing

## Logging

- Morgan for HTTP request logging
- Winston for application-level logging

## Deployment

- Docker support (Dockerfile to be added)
- CI/CD pipeline configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Specify your license, e.g., MIT]

## Contact

[Your Name]

- Email: your.email@example.com
- Project Link: [Repository URL]
