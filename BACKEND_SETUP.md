# Backend Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/travora

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Environment
NODE_ENV=development
```

## Dependencies

The following packages have been installed:

- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `zod` - Schema validation (already installed)

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login

### Users

- `GET /api/v1/users/me` - Get current user (authenticated)

### Posts

- `GET /api/v1/posts` - List posts with pagination
- `POST /api/v1/posts` - Create a new post (authenticated)
- `GET /api/v1/posts/[id]` - Get a specific post
- `PUT /api/v1/posts/[id]` - Update a post (authenticated, author only)
- `DELETE /api/v1/posts/[id]` - Delete a post (authenticated, author only)

### Health Check

- `GET /api/health` - API health status

## Usage Examples

### Register a new user

```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","name":"John Doe","password":"password123"}'
```

### Login

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Create a post (with authentication)

```bash
curl -X POST http://localhost:3000/api/v1/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"My First Post","body":"This is the content of my post"}'
```

## Database Models

### User Model

- `email` (unique, required)
- `name` (optional)
- `password` (required, hashed)
- `timestamps` (createdAt, updatedAt)

### Post Model

- `title` (required)
- `body` (required)
- `author` (reference to User, required)
- `timestamps` (createdAt, updatedAt)

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Route protection for authenticated endpoints
- Author-only access for post modifications
- Input validation with Zod schemas
- CORS middleware for API routes
