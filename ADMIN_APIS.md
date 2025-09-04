# Admin APIs Documentation

## Overview

This document describes the admin authentication and user management APIs for the Travora application.

## Authentication

All admin APIs require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## API Endpoints

### 1. User Login

**POST** `/api/v1/auth/login`

- **Description**: Authenticate user and get JWT token
- **Body**:
  ```json
  {
    "email": "admin@gmail.com",
    "password": "Test@1234"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "token": "jwt-token-here",
      "user": {
        "id": "user-id",
        "email": "admin@gmail.com",
        "name": "Admin User",
        "role": "admin",
        "username": "admin"
      }
    }
  }
  ```

### 2. Create User with Role (Admin Only)

**POST** `/api/v1/users/create`

- **Description**: Create a new user with specific role
- **Authentication**: Admin role required
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "name": "User Name",
    "password": "password123",
    "role": "user",
    "username": "username"
  }
  ```
- **Roles**: `admin`, `user`, `owner`

### 3. Change Username

**PUT** `/api/v1/users/change-username`

- **Description**: Change user's username
- **Authentication**: Valid JWT token required
- **Body**:
  ```json
  {
    "username": "newusername"
  }
  ```

### 4. Change Password

**PUT** `/api/v1/users/change-password`

- **Description**: Change user's password
- **Authentication**: Valid JWT token required
- **Body**:
  ```json
  {
    "oldPassword": "currentpassword",
    "newPassword": "newpassword123",
    "email": "user@example.com"
  }
  ```

### 5. List Users (Admin Only)

**GET** `/api/v1/users`

- **Description**: Get list of all users
- **Authentication**: Admin role required
- **Query Parameters**:
  - `role`: Filter by role (optional)

## Role-Based Access Control

### Admin Role

- Can create users with any role
- Can view all users
- Full access to admin panel

### Owner Role

- Similar to admin but with business-specific permissions
- Can manage tours and attractions

### User Role

- Basic user access
- Can change own username and password

## Security Features

1. **JWT Authentication**: Secure token-based authentication
2. **Role Verification**: Server-side role validation
3. **Password Hashing**: Bcrypt with 12 salt rounds
4. **Input Validation**: Zod schema validation
5. **Route Protection**: Middleware-based route protection

## Seeding Admin User

To create the initial admin user, run:

```bash
npm run seed
```

This will create a user with:

- Email: `admin@gmail.com`
- Password: `Test@1234`
- Role: `admin`

## Error Responses

All APIs return consistent error responses:

```json
{
  "success": false,
  "error": "error_code",
  "message": "Human readable message",
  "status": 400
}
```

Common error codes:

- `unauthorized`: Invalid or missing token
- `forbidden`: Insufficient permissions
- `invalid_body`: Request validation failed
- `email_taken`: Email already exists
- `username_taken`: Username already exists
- `invalid_old_password`: Wrong current password
- `email_mismatch`: Email doesn't match authenticated user
